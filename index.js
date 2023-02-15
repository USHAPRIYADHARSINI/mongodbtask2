// 1. mongosh
// to connect to mongoshell
// 2. show dbs
// to see all dbs
// 3. use dbname
// to switch dbs
// 4. show collections
// to view all collections

db.zendummy.insertMany([
  {
    student_id: "1",
    name: "usha",
    codekata: "6",
    topics: [
        {
            topicname: "html-intro",
            date: ISODate("2022-10-03")
        },
        {
            topicname: "css-intro",
            date: ISODate("2022-10-05")
        },
        {
            topicname: "js-intro",
            date: ISODate("2022-10-09")
        },
        {
            topicname: "html-2",
            date: ISODate("2022-10-12")
        },
        {
            topicname: "css-2",
            date: ISODate("2022-10-17")
        }
    ],
    tasks: [
        {
        name: "html-basic",
        date : ISODate("2022-09-02"),
        },
        {
        name: "css-basic",
        date : ISODate("2022-10-02"),
        },
        {
        name: "js-basic",
        date : ISODate("2022-10-10"),
        },
        {
        name: "html-medium",
        date : ISODate("2022-10-12"),
        },
        {
        name: "css-medium",
        date : ISODate("2022-10-16"),
        },
        {
        name: "js-medium",
        date : ISODate("2022-10-20"),
        }
    ],
    companydrives: [
        {
            name: "hto pvt ltd",
            date: ISODate("2022-10-24")
        },
    ],
    mentor: "veena"
  },
  {
    student_id: "2",
    name: "heena",
    codekata: "8",
    topics: [
        {
            topicname: "html-intro",
            date: ISODate("2022-10-03")
        },
        {
            topicname: "css-intro",
            date: ISODate("2022-10-05")
        },
        {
            topicname: "js-intro",
            date: ISODate("2022-10-09")
        },
        {
            topicname: "html-2",
            date: ISODate("2022-10-12")
        },
        {
            topicname: "css-2",
            date: ISODate("2022-10-17")
        }
    ],
    tasks: [
        {
        name: "html-basic",
        date : ISODate("2022-09-22"),
        },
        {
        name: "css-basic",
        date : ISODate("2022-10-02"),
        },
        {
        name: "js-basic",
        date : ISODate("2022-10-10"),
        },
        {
        name: "html-medium",
        date : ISODate("2022-10-16"),
        },
        {
        name: "css-medium",
        date : ISODate("2022-10-20"),
        },
        {
        name: "js-medium",
        date : ISODate("2022-10-26"),
        }
    ],
    companydrives: [
        {
            name: "hto pvt ltd",
            date: ISODate("2022-10-24")
        },
        {
            name: "hto pvt ltd",
            date: ISODate("2022-10-14")
        },
        {
            name: "hto pvt ltd",
            date: ISODate("2022-11-04")
        }
    ],
    mentor: "veena"
  },
  {
    student_id: "3",
    name: "siva",
    codekata: "8",
    topics: [
        {
            topicname: "css-intro",
            date: ISODate("2022-10-05")
        },
        {
            topicname: "html-2",
            date: ISODate("2022-10-12")
        },
        {
            topicname: "js-2",
            date: ISODate("2022-10-20")
        }
    ],
    tasks: [
        {
        name: "html-basic",
        date : ISODate("2022-09-24"),
        },
        {
        name: "css-basic",
        date : ISODate("2022-10-01"),
        },
        {
        name: "js-basic",
        date : ISODate("2022-10-06"),
        },
        {
        name: "html-medium",
        date : ISODate("2022-10-18"),
        },
        {
        name: "css-medium",
        date : ISODate("2022-10-23"),
        },
        {
        name: "js-medium",
        date : ISODate("2022-10-28"),
        }
    ],
    companydrives: [
        {
            name: "hto pvt ltd",
            date: ISODate("2022-10-14")
        }
    ],
    mentor: "teena"
  },
  {
    student_id: "4",
    name: "deeksha",
    codekata: "7",
    topics: [
        {
            topicname: "html-intro",
            date: ISODate("2022-10-03")
        },
        {
            topicname: "css-intro",
            date: ISODate("2022-10-05")
        },
        {
            topicname: "js-intro",
            date: ISODate("2022-10-09")
        },
        {
            topicname: "html-2",
            date: ISODate("2022-10-12")
        },
        {
            topicname: "css-2",
            date: ISODate("2022-10-17")
        },
        {
            topicname: "js-2",
            date: ISODate("2022-10-20")
        }
    ],
    tasks: [
        {
        name: "html-basic",
        date : ISODate("2022-09-28"),
        },
        {
        name: "css-basic",
        date : ISODate("2022-10-03"),
        },
        {
        name: "js-basic",
        date : ISODate("2022-10-09"),
        },
        {
        name: "html-medium",
        date : ISODate("2022-10-16"),
        },
        {
        name: "css-medium",
        date : ISODate("2022-10-19"),
        },
        {
        name: "js-medium",
        date : ISODate("2022-10-24"),
        }
    ],
    companydrives: [
        {
            name: "hto pvt ltd",
            date: ISODate("2022-10-08")
        }
    ],
    mentor: "teena"
  },
  {
    student_id: "5",
    name: "deekshitha",
    codekata: "6",
    topics: [
        {
            topicname: "html-intro",
            date: ISODate("2022-10-03")
        },
        {
            topicname: "css-intro",
            date: ISODate("2022-10-05")
        },
        {
            topicname: "js-intro",
            date: ISODate("2022-10-09")
        },
        {
            topicname: "html-2",
            date: ISODate("2022-10-12")
        },
        {
            topicname: "js-2",
            date: ISODate("2022-10-20")
        }
    ],
    tasks: [
        {
        name: "html-basic",
        date : ISODate("2022-09-30"),
        },
        {
        name: "css-basic",
        date : ISODate("2022-10-04"),
        },
        {
        name: "js-basic",
        date : ISODate("2022-10-06"),
        },
        {
        name: "html-medium",
        date : ISODate("2022-10-15"),
        },
        {
        name: "css-medium",
        date : ISODate("2022-10-20"),
        },
        {
        name: "js-medium",
        date : ISODate("2022-10-28"),
        }
    ],
    companydrives: [
        {
            name: "hto pvt ltd",
            date: ISODate("2022-10-08")
        }
    ],
    mentor: "teena"
  },
  {
    student_id: "6",
    name: "pooja",
    codekata: "9",
    topics: [
        {
            topicname: "html-intro",
            date: ISODate("2022-10-03")
        },
        {
            topicname: "css-intro",
            date: ISODate("2022-10-05")
        },
        {
            topicname: "html-2",
            date: ISODate("2022-10-12")
        },
        {
            topicname: "js-2",
            date: ISODate("2022-10-20")
        }
    ],
    tasks: [
        {
        name: "html-basic",
        date : ISODate("2022-09-27"),
        },
        {
        name: "css-basic",
        date : ISODate("2022-10-10"),
        },
        {
        name: "js-basic",
        date : ISODate("2022-10-11"),
        },
        {
        name: "html-medium",
        date : ISODate("2022-10-13"),
        },
        {
        name: "css-medium",
        date : ISODate("2022-10-17"),
        },
        {
        name: "js-medium",
        date : ISODate("2022-10-24"),
        }
    ],
    companydrives: [
        {
            name: "hto pvt ltd",
            date: ISODate("2022-10-08")
        }
    ],
    mentor: "reena"
  },
  {
    student_id: "7",
    name: "priya",
    codekata: "7",
    topics: [
        {
            topicname: "html-intro",
            date: ISODate("2022-10-03")
        },
        {
            topicname: "css-intro",
            date: ISODate("2022-10-05")
        },
        {
            topicname: "html-2",
            date: ISODate("2022-10-12")
        },
        {
            topicname: "css-2",
            date: ISODate("2022-10-17")
        },
        {
            topicname: "js-2",
            date: ISODate("2022-10-20")
        }
    ],
    tasks: [
        {
        name: "html-basic",
        date : ISODate("2022-09-20"),
        },
        {
        name: "css-basic",
        date : ISODate("2022-09-26"),
        },
        {
        name: "js-basic",
        date : ISODate("2022-09-30"),
        },
        {
        name: "html-medium",
        date : ISODate("2022-10-01"),
        },
        {
        name: "css-medium",
        date : ISODate("2022-10-07"),
        },
        {
        name: "js-medium",
        date : ISODate("2022-10-12"),
        }
    ],
    companydrives: [
        {
            name: "hto pvt ltd",
            date: ISODate("2022-10-20")
        }
    ],
    mentor: "reena"
  },
  {
    student_id: "8",
    name: "ganga",
    codekata: "10",
    topics: [
        {
            topicname: "html-intro",
            date: ISODate("2022-10-03")
        },
        {
            name: "css-basic",
            date : ISODate("2022-10-03")
        },
        {
            topicname: "js-intro",
            date: ISODate("2022-10-09")
        },
        {
            topicname: "html-2",
            date: ISODate("2022-10-12")
        },
        {
            topicname: "css-2",
            date: ISODate("2022-10-17")
        },
        {
            topicname: "js-2",
            date: ISODate("2022-10-20")
        }
    ],
    tasks: [
        {
        name: "html-basic",
        date : ISODate("2022-09-27"),
        },
        {
        name: "css-basic",
        date : ISODate("2022-10-05"),
        },
        {
        name: "js-basic",
        date : ISODate("2022-10-18"),
        },
        {
        name: "html-medium",
        date : ISODate("2022-10-20"),
        },
        {
        name: "css-medium",
        date : ISODate("2022-10-22"),
        },
        {
        name: "js-medium",
        date : ISODate("2022-10-26"),
        }
    ],
    companydrives: [
        {
            name: "hto pvt ltd",
            date: ISODate("2022-10-20")
        }
    ],
    mentor: "reena"
  },
  {
    student_id: "9",
    name: "deeksha",
    codekata: "7",
    topics: [
        {
            topicname: "html-intro",
            date: ISODate("2022-09-03")
        },
        {
            topicname: "js-intro",
            date: ISODate("2022-10-09")
        },
        {
            topicname: "html-2",
            date: ISODate("2022-10-12")
        },
        {
            topicname: "css-2",
            date: ISODate("2022-10-17")
        },
        {
            topicname: "js-2",
            date: ISODate("2022-10-20")
        }
    ],
    tasks: [
        {
        name: "html-basic",
        date : ISODate("2022-09-23"),
        },
        {
        name: "css-basic",
        date : ISODate("2022-09-29"),
        },
        {
        name: "js-basic",
        date : ISODate("2022-10-05"),
        },
        {
        name: "html-medium",
        date : ISODate("2022-10-16"),
        },
        {
        name: "css-medium",
        date : ISODate("2022-10-18"),
        },
        {
        name: "js-medium",
        date : ISODate("2022-10-24"),
        }
    ],
    companydrives: [
        {
            name: "hto pvt ltd",
            date: ("2022-10-20")
        }
    ],
    mentor: "meena"
  },
  {
    student_id: "10",
    name: "lisha",
    codekata: "5",
    topics: [
        {
            topicname: "html-intro",
            date: ISODate("2022-10-03")
        },
        {
            topicname: "js-intro",
            date: ISODate("2022-10-09")
        },
        {
            topicname: "html-2",
            date: ISODate("2022-10-12")
        },
        {
            topicname: "css-2",
            date: ISODate("2022-10-17")
        },
        {
            topicname: "js-2",
            date: ISODate("2022-10-20")
        }
    ],
    tasks: [
        {
        name: "html-basic",
        date : ISODate("2022-09-30"),
        },
        {
        name: "css-basic",
        date : ISODate("2022-10-04"),
        },
        {
        name: "js-basic",
        date : ISODate("2022-10-10"),
        },
        {
        name: "html-medium",
        date : ISODate("2022-10-17"),
        },
        {
        name: "css-medium",
        date : ISODate("2022-10-20"),
        },
        {
        name: "js-medium",
        date : ISODate("2022-10-23"),
        }
    ],
    companydrives: [
        {
            name: "hto pvt ltd",
            date: ISODate("2022-11-04")
        }
    ],
    mentor: "meena"
  },

]);

// db.zen.aggregate(
//     [
//       {
//         $student_id: {
//            $topics: { $dateToParts: { date: "$date" }} 
//         }
//       }
//     ]
//  )

db.zendummy.find({},{topics: {date: {$gte:ISODate("2022-10-01"),$lte:ISODate("2022-10-30")}}})
// number of problems solved by the user in codekata
db.zendummy.find({codekata})
// Find all the company drives and students who are appeared for the placement.
db.zendummy.find({companydrives, student_id })
// Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
db.zendummy.find({companydrives: [{date: {$gte:2022-10-15, $lte: 2022-10-31}}]})

 db.zendummy.delete({})
 db.zendummy.deleteMany({})