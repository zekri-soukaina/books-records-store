import recordData from "../../data/records.json " assert { type: "json" };

const deleteRecord = (id) => {
  const index = recordData.records.findIndex((record) => record.id === id);

  if (index === -1) {
    throw new NotFoundError("record", id);
  }
  recordData.records.splice(index, 1);
  return id;
};
export default deleteRecord;
