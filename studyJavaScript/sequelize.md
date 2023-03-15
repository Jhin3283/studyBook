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
