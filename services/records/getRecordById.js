import recordData from "../../data/records.json" assert { type: "json" };

const getRecordById = (id) => {
  const record = recordData.records.find((record) => record.id === id);
  if (!record) {
    throw new NotFoundError("record", id);
  }
  return record;
};

export default getRecordById;
