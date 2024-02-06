import { FooterData } from "../data/footer/FooterData";
import MapsHomeWorkRoundedIcon from "@mui/icons-material/MapsHomeWorkRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import { useSelector } from "react-redux";

export default function Footer({ webInfos }) {
  const lngActive = useSelector((state) => state.app.language);
  const languageContent = useSelector((state) => state.app.languageContent);
  const uploadPath = useSelector((state) => state.app.uploadPath);
  const webInfo = useSelector((state) => state.app.webInfo);

  // เพิ่มฟังก์ชันสำหรับการตรวจสอบและเพิ่ม <br> หลัง $
  const addLineBreaksAfterDollar = (text) => {
    return text.replace(/\$/g, '<br>');
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-[#2F5C6F] to-[#489295] px-4 py-12 text-[#fff]">
        <div className="max-w-[1636px] max-xl:max-w-[768px] m-auto flex max-xl:flex-col justify-between items-center max-xl:items-start gap-4">
          <figure className="h-full">
            {/* <img src={FooterData.image} alt="" /> */}
            <img src={uploadPath + webInfo.detail.image_2.link} alt="" />
          </figure>
          <div className="max-w-[609px]">
            <p className="text-[20px] font-[500]">{languageContent['8Y9GhinzE9gDOQu'] /** ที่อยู่ */}</p>
            <div className="flex items-start gap-2 mt-2">
              <MapsHomeWorkRoundedIcon sx={{ fontSize: "30px" }} />
              {/* ใช้ addLineBreaksAfterDollar ที่เพิ่มไว้ */}
              <p className="leading-5 text-[16px] font-[300]" dangerouslySetInnerHTML={{ __html: addLineBreaksAfterDollar(webInfo.location.address.value) }} />
            </div>
          </div>
          <div>
            <p className="text-[20px] font-[500]">{languageContent['YHHl2mUgZGIpoum'] /** ติดต่อสอบถาม */}</p>
            <div className="flex max-xl:flex-col justify-between xl:items-center gap-4 mt-2">
              <a href={webInfo.contact.link_facebook.link} target="_blank" className="xl:w-1/2 flex items-center gap-2 leading-5">
                <FacebookRoundedIcon sx={{ fontSize: "30px" }} />
                <p>{webInfo.contact.link_facebook.value}</p>
              </a>
              <a href={"tel:" + webInfo.contact.phone.value} className="xl:w-1/2 flex items-center gap-2 leading-5">
                <LocalPhoneRoundedIcon sx={{ fontSize: "30px" }} />
                <p>{webInfo.contact.phone.value}</p>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-[#A3CFC0] px-4 py-2 text-[#2F5C6F] text-center leading-5">
        {webInfo.footer.copy_right.value}
      </div>
    </>
  );
}
