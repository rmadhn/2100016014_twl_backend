const { schema } = require("moongose/models/user_model");

module.exports = (mongoose) => {
  const Schema = mongoose.Schema(
    {
      nama: String,
      jurusan: String,
      angkatan: String,
      alamat: String,
    },
    {
      timestamps: true,
    }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toobject();
    object.id = _id;

    return object;
  });
  return mongoose.model("mahasiswa", Schema);
};
