import { v4 as uuidv4 } from "uuid";

export const dummyData = [];
for (var i = 0; i < 204; i++) {
  var data = {
    id: uuidv4(),
    title: "サンプルデータ" + String(i + 1),
    body: "質問の内容",
  };
  dummyData.push(data);
}

export const dummyUser = {
  id: uuidv4(),
  nickname: "testUser",
  mail: "test@test.com",
};
