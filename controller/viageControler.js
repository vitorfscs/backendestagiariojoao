import { UserModel } from "../postgres/postgres.js";

export const getAllEmp = async (req, res) => {
  try {
    const viagens = await UserModel.findAll();

    if (viagens.length === 0) {
      return res.status(404).json({ message: "Nenhuma viagem encontrada." });
    }

    return res.status(200).json(viagens);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro no servidor." });
  }
};

export const addEmp = async (req, res) => {
  const { pais, local, quando, url_bandeira } = req.body;

  try {
    if (!pais || !local || !quando || !url_bandeira) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    const viagem = await UserModel.create({ pais, local, quando, url_bandeira });
    
    return res.status(201).json({
      message: "Desejo adicionado com sucesso!",
      viagem,
    });
  } catch (error) {
    console.error("Erro ao adicionar viagem:", error);
    return res.status(500).json({ message: "Erro no servidor.", error: error.message });
  }
};

export const updateEmp = async (req, res) => {
  const { id } = req.params;
  const { pais, local, quando, url_bandeira } = req.body;

  try {
    const viagem = await UserModel.findByPk(id);

    if (!viagem) {
      return res.status(404).json({ message: "Viagem não encontrada." });
    }

    viagem.pais = pais || viagem.pais;
    viagem.local = local || viagem.local;
    viagem.quando = quando || viagem.quando;
    viagem.url_bandeira = url_bandeira || viagem.url_bandeira;
    viagem.updatedAt = new Date();

    await viagem.save();

    return res.status(200).json({ message: "Desejo atualizado com sucesso!", viagem });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro no servidor." });
  }
};

export const deleteEmp = async (req, res) => {
  const { id } = req.params;

  try {
    const viagem = await UserModel.findByPk(id);

    if (!viagem) {
      return res.status(404).json({ message: "Viagem não encontrada." });
    }

    await viagem.destroy();
    return res.status(200).json({ message: "Desejo deletado com sucesso!" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erro no servidor." });
  }
};
