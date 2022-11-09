const dummyData = [];
for (var i = 0; i < 205; i++) {
  var data = {
    id: i + 1,
    title: "サンプルデータ" + String(i + 1),
    body: "何か解決したい",
  };
  dummyData.push(data);
}

export default dummyData;
