import React from "react";

import Month from "../month";
import showNotification from "../../services/notifications";

class App extends React.Component {
  state = {
    events: [
      {
        title: "Forward JS",
        place: "San Francisco, CA, U.S.A.",
        monthStart: "January",
        dayStart: 24,
        monthEnd: null,
        dayEnd: null,
        theme: "javascript"
      },
      {
        title: "React Iran",
        place: "Tehran, Iran",
        monthStart: "January",
        dayStart: 30,
        monthEnd: null,
        dayEnd: null,
        theme: "javascript"
      },
      {
        title: "Interaction Design Education Summit (IxDA)",
        place: "Seattle, SA, U.S.A.",
        monthStart: "February",
        dayStart: 3,
        monthEnd: "February",
        dayEnd: 4,
        theme: "ux"
      },
      {
        title: "Pause Fest",
        place: "Melbourne, Australia",
        monthStart: "February",
        dayStart: 5,
        monthEnd: "February",
        dayEnd: 8,
        theme: "javascript"
      },
      {
        title: "c't <webdev>",
        place: "Keln, Germany",
        monthStart: "February",
        dayStart: 6,
        monthEnd: "February",
        dayEnd: 8,
        theme: "javascript"
      },
      {
        title: "Agent Conf",
        place: "Dornbirn&Lech, Austria",
        monthStart: "February",
        dayStart: 21,
        monthEnd: "February",
        dayEnd: 24,
        theme: "javascript"
      },
      {
        title: "ng-India",
        place: "Gurgaon, India",
        monthStart: "February",
        dayStart: 23,
        monthEnd: null,
        dayEnd: null,
        theme: "javascript"
      },
      {
        title: "ReactFoo",
        place: "Bengaluru, India",
        monthStart: "March",
        dayStart: 1,
        monthEnd: "March",
        dayEnd: 2,
        theme: "javascript"
      },
      {
        title: "Service Design in Government",
        place: "Edinburgh, Scotland",
        monthStart: "March",
        dayStart: 6,
        monthEnd: "March",
        dayEnd: 8,
        theme: "ux"
      },
      {
        title: "UX Salon",
        place: "Tel-Aviv, Israel",
        monthStart: "March",
        dayStart: 10,
        monthEnd: "March",
        dayEnd: 11,
        theme: "ux"
      },
      {
        title: "EmberConf",
        place: "Portland, U.S.A.",
        monthStart: "March",
        dayStart: 18,
        monthEnd: "March",
        dayEnd: 20,
        theme: "javascript"
      },
      {
        title: "FrontEnd Fest",
        place: "Chicago, IL, U.S.A.",
        monthStart: "April",
        dayStart: 1,
        monthEnd: "April",
        dayEnd: 3,
        theme: "javascript"
      },
      {
        title: "WebCon",
        place: "Champaign-Urbana, IL, U.S.A.",
        monthStart: "April",
        dayStart: 3,
        monthEnd: "April",
        dayEnd: 5,
        theme: "ux"
      },
      {
        title: "React Amsterdam",
        place: "Amsterdam, Netherlands",
        monthStart: "April",
        dayStart: 12,
        monthEnd: null,
        dayEnd: null,
        theme: "javascript"
      }
    ]
  };

  monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  initMonths = () => {
    let months = [];
    let id = 0;
    this.monthsOfYear.forEach(month => {
      const arr = this.state.events.filter((item, i, arr) => {
        return item.monthStart === month;
      });
      if (arr.length > 0) {
        months.push(
          <li key={id++} className="month">
            <h2 className="month__name">{month}</h2>
            <Month data={arr} />
          </li>
        );
      }
    });
    return months;
  };

  dateGetTime = (dateNow, days) => {
    const date = new Date(dateNow.getTime());
    date.setDate(date.getDate() + days);
    return date.getTime();
  };

  showNotifications = () => {
    const today = new Date();
    const dateNow = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    const threeDaysDate = this.dateGetTime(dateNow, 3);
    const sevenDaysDate = this.dateGetTime(dateNow, 7);
    const fourteenDaysDate = this.dateGetTime(dateNow, 14);

    this.state.events.forEach(event => {
      let tmpDate = new Date(
        dateNow.getFullYear(),
        this.monthsOfYear.indexOf(event.monthStart),
        event.dayStart
      );
      tmpDate = tmpDate.getTime();
      if (tmpDate === threeDaysDate) {
        showNotification(event.title, `Стартует через 3 дня`);
      } else if (tmpDate === sevenDaysDate) {
        showNotification(event.title, `Стартует через 7 дней`);
      } else if (tmpDate === fourteenDaysDate) {
        showNotification(event.title, `Стартует через 14 дней`);
      }
    });
  };

  render() {
    const arr = this.initMonths();
    this.showNotifications();
    return <ul>{arr}</ul>;
  }
}

export default App;
