# MongoDB

SQL과 달리 Database아래 Collection이 있고 Documents가 있는데 Schemaless라서 원하는 형식으로 데이터 삽입 가능. JSON파일 이용한다고 생각.

## mongoose

```js
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));
```

위 처럼 mongoose를 통해 MongoDB와 연동가능

### Schema

```js
const schema = new mongoose.Schema({
  apmac_id: Number,
  profile_id: Number,
  channel: Number,
  rssi: Number,
  stamac: String,
  apmac: String,
  bssid: String,
  pkt_type: String,
  datetime: Date,
  createdAt: { type: Date, expires: "2h", default: Date.now }, // expires를 이용하여 만료시간 정하여 용량관리 가능
});
const Stamac = mongoose.model("stamac", schema);
```

### find

```js
const fiveData = await Stamac.find({
      datetime: {
        $gte: time5,
      },
```

### save

```js
const newStamac = new Stamac({
  apmac_id,
  channel,
  rssi,
  stamac,
  bssid,
  pkt_type,
  datetime,
  profile_id,
});
newStamac.save();
```
