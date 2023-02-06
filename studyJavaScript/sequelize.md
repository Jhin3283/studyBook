# join

include 예시)
const sensor_alarm = await models.sensor_alarm.findAll({
      //raw: true,
      nest: true,
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

