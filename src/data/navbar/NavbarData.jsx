export const NavbarData = [
  {
    id: 1,
    title: "หน้าหลัก",
    url: "/",
    submenu: [],
  },
  {
    id: 2,
    title: "ภาควิชา",
    url: null,
    submenu: [
      {
        id: 1,
        title: "ประวัติความเป็นมา",
        url: "/department/history",
      },
      {
        id: 2,
        title: "โครงสร้าง วิสัยทัศน์ พันธกิจ",
        url: "/department/vision",
      },
      {
        id: 3,
        title: "อาจารย์แพทย์และบุคลากร",
        url: "/department/employee",
      },
    ],
  },
  {
    id: 3,
    title: "การเรียนการสอน",
    url: null,
    submenu: [
      {
        id: 1,
        title: "หลักสูตรแพทยศาสตรบัณฑิต",
        url: "/education/doctor",
      },
      {
        id: 2,
        title: "หลักสูตรแพทย์ประจำบ้าน",
        url: "/education/resident",
      },
    ],
  },
  {
    id: 4,
    title: "การบริการเวชศาสตร์ฟื้นฟู",
    url: null,
    submenu: [
      {
        id: 1,
        title: "ตารางออกตรวจ",
        url: "/service/schedule",
      },
      {
        id: 2,
        title: "ขอบเขตการให้บริการ",
        url: "/service/scope",
      },
    ],
  },
  {
    id: 5,
    title: "งานวิจัยนวัตกรรม",
    url: null,
    submenu: [
      {
        id: 1,
        title: "งานวิจัย",
        url: "/research/all",
      },
      {
        id: 2,
        title: "บทความ",
        url: "/research/article",
      },
      {
        id: 3,
        title: "หนังสือตำรา",
        url: "/research/book",
      },
    ],
  },
  {
    id: 6,
    title: "กิจกรรม",
    url: "/event",
    submenu: [],
  },
];
