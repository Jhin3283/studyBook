# Sequelize-Auto

sequelize-auto -o "./models" -d mydatabase -h 127.0.0.1 -u root -p 3306 -x password -e mysql

# join

include 예시)
await models.sensor_alarm.findAll({
where: whe,
attributes: [
"idx",
"level_code",
"color",
"min",
"max",
"has_noti",
"sensor_idx"
],
include: [{
model: models.sensor,
attributes: ["name"]
},{
model: models.sub_code,
attributes:["level"]
}],
subQuery: false,
});

# dataValues 없애기

raw: true 추가,
nest: true 할 경우 join된 데이터 정렬

# include order

include order 예시)
await models.alarm.findAll({
raw: true,
where: whe,
attributes: [
["level_code", "level"],
[Sequelize.fn("COUNT", "level_code"), "count"],
],
group: ["level_code"],
include:[{model:models.sub_code,attributes:[]}],
order: [[models.sub_code,"level","ASC"]]
});

# OP 명령어

[Op.and]: {a: 5},           // AND (a = 5)
      [Op.or]: [{a: 5}, {a: 6}],  // (a = 5 OR a = 6)
      [Op.gt]: 6,                // id > 6
      [Op.gte]: 6,               // id >= 6
      [Op.lt]: 10,               // id < 10
      [Op.lte]: 10,              // id <= 10
      [Op.ne]: 20,               // id != 20
      [Op.between]: [6, 10],     // BETWEEN 6 AND 10
      [Op.notBetween]: [11, 15], // NOT BETWEEN 11 AND 15
      [Op.in]: [1, 2],           // IN [1, 2]
      [Op.notIn]: [1, 2],        // NOT IN [1, 2]
      [Op.like]: '%hat',         // LIKE '%hat'
      [Op.notLike]: '%hat',       // NOT LIKE '%hat'
      [Op.iLike]: '%hat',         // ILIKE '%hat' (case insensitive)  (PG only)
      [Op.notILike]: '%hat',      // NOT ILIKE '%hat'  (PG only)
      [Op.overlap]: [1, 2],       // && [1, 2] (PG array overlap operator)
      [Op.contains]: [1, 2],      // @> [1, 2] (PG array contains operator)
      [Op.contained]: [1, 2],     // <@ [1, 2] (PG array contained by operator)
      [Op.any]: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)

# Sequelize fn

Count - [Sequelize.fn("COUNT", "fromAP_id"), "count"],

Sum - [Sequelize.fn('SUM', Sequelize.col('histories.amount')), 'total']