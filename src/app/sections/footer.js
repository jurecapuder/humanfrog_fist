import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="bg-logo-blue text-white grid grid-cols-4 gap-x-12" style={{ padding: "0 10%", paddingTop: "30px" }}>
        <div className="flex flex-col justify-end">
          <img src="/fist.png" alt="Company Logo" className="w-full h-auto object-contain filter grayscale" />
        </div>
        <div>
          <h3>Fist d.o.o.</h3>

          <p>
              Brodišče 4, 1236 Trzin <br />
              Slovenija
          </p>

          <p>
              T +386 1 562 11 53 <br />
              E <a href="mailto:info@fist.si" className="text-[#BFC4F3]">info@fist.si</a>
          </p>
        </div>
        <div>
          <h3 className="mb-2">PRODAJNI PROGRAM</h3>

          <div className="border-t border-black h-px mb-2" />

          <ul className="text-[#BFC4F3]">
            <li className="flex items-center mb-4">
              <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path d="M2.35938 12.7383L0.554688 10.9336L4.73828 6.75L0.554688 2.56641L2.35938 0.761719L8.34766 6.75L2.35938 12.7383Z" fill="#BFC4F3"/>
              </svg>
              Polietileni
            </li>
            
            <li className="flex items-center mb-4">
              <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path d="M2.35938 12.7383L0.554688 10.9336L4.73828 6.75L0.554688 2.56641L2.35938 0.761719L8.34766 6.75L2.35938 12.7383Z" fill="#BFC4F3"/>
              </svg>
              Folijski materiali
            </li>

            <li className="flex items-center mb-4">
              <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path d="M2.35938 12.7383L0.554688 10.9336L4.73828 6.75L0.554688 2.56641L2.35938 0.761719L8.34766 6.75L2.35938 12.7383Z" fill="#BFC4F3"/>
              </svg>
              Stireni
            </li>

            <li className="flex items-center mb-4">
              <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path d="M2.35938 12.7383L0.554688 10.9336L4.73828 6.75L0.554688 2.56641L2.35938 0.761719L8.34766 6.75L2.35938 12.7383Z" fill="#BFC4F3"/>
              </svg>
              Barvila in dodatki
            </li>

            <li className="flex items-center mb-4">
              <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path d="M2.35938 12.7383L0.554688 10.9336L4.73828 6.75L0.554688 2.56641L2.35938 0.761719L8.34766 6.75L2.35938 12.7383Z" fill="#BFC4F3"/>
              </svg>
              Polipropileni
            </li>

            <li className="flex items-center mb-4">
              <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-4">
                <path d="M2.35938 12.7383L0.554688 10.9336L4.73828 6.75L0.554688 2.56641L2.35938 0.761719L8.34766 6.75L2.35938 12.7383Z" fill="#BFC4F3"/>
              </svg>
              Tehnični granulati
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2">SPREMLJEJTE NAS</h3>

          <div className="border-t border-black h-px mb-3" />

          <a href="https://www.linkedin.com/company/fist-d-o-o/" className="flex items-center gap-2 text-[#BFC4F3] mb-2">
              <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.9414 0.75C24.3451 0.75 25.5391 1.24219 26.5234 2.22656C27.5078 3.21094 28 4.40495 28 5.80859V23.6914C28 25.0951 27.5078 26.2891 26.5234 27.2734C25.5391 28.2578 24.3451 28.75 22.9414 28.75H5.05859C3.65495 28.75 2.46094 28.2578 1.47656 27.2734C0.492188 26.2891 0 25.0951 0 23.6914V5.80859C0 4.40495 0.492188 3.21094 1.47656 2.22656C2.46094 1.24219 3.65495 0.75 5.05859 0.75H22.9414ZM25.457 23.6914V5.80859C25.457 5.11589 25.2109 4.52344 24.7188 4.03125C24.2266 3.53906 23.6341 3.29297 22.9414 3.29297H5.05859C4.36589 3.29297 3.77344 3.53906 3.28125 4.03125C2.78906 4.52344 2.54297 5.11589 2.54297 5.80859V23.6914C2.54297 24.3841 2.78906 24.9766 3.28125 25.4688C3.77344 25.9609 4.36589 26.207 5.05859 26.207H22.9414C23.6341 26.207 24.2266 25.9609 24.7188 25.4688C25.2109 24.9766 25.457 24.3841 25.457 23.6914ZM6.45312 10.9219V22.3789H8.99609V10.9219H6.45312ZM17.2266 10.8398C18.5391 10.8398 19.5872 11.2591 20.3711 12.0977C21.1732 12.918 21.5742 14.0117 21.5742 15.3789V22.3789H19.0312V15.3789C19.0312 14.7044 18.8763 14.2031 18.5664 13.875C18.2747 13.5469 17.8281 13.3828 17.2266 13.3828C16.4974 13.3828 15.8776 13.6198 15.3672 14.0938C14.8568 14.5677 14.4284 15.0052 14.082 15.4062V22.3789H11.5391V10.9219H14.082V11.9062C14.5013 11.6146 14.9661 11.3685 15.4766 11.168C16.0052 10.9492 16.5885 10.8398 17.2266 10.8398ZM7.71094 5.94531C8.07552 5.94531 8.3763 6.07292 8.61328 6.32812C8.86849 6.5651 8.99609 6.85677 8.99609 7.20312C8.99609 7.54948 8.86849 7.85026 8.61328 8.10547C8.3763 8.36068 8.07552 8.48828 7.71094 8.48828C7.36458 8.48828 7.0638 8.36068 6.80859 8.10547C6.57161 7.85026 6.45312 7.54948 6.45312 7.20312C6.45312 6.85677 6.57161 6.5651 6.80859 6.32812C7.0638 6.07292 7.36458 5.94531 7.71094 5.94531Z" fill="#BFC4F3"/>
              </svg>
              
              LinkedIn
          </a>

          <div className="border-t border-black h-px mb-3" />

          <a href="https://www.youtube.com/@Fist_doo" className="flex items-center gap-2 text-[#BFC4F3] mb-2">
              <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.457 15.8359V5.66406L17.8281 10.7773L11.457 15.8359ZM22.9688 0.578125C24.3542 0.578125 25.5391 1.07031 26.5234 2.05469C27.5078 3.03906 28 4.22396 28 5.60938V15.8906C28 17.276 27.5078 18.4609 26.5234 19.4453C25.5391 20.4297 24.3542 20.9219 22.9688 20.9219H5.05859C3.65495 20.9219 2.46094 20.4297 1.47656 19.4453C0.492188 18.4609 0 17.276 0 15.8906V5.60938C0 4.22396 0.492188 3.03906 1.47656 2.05469C2.46094 1.07031 3.65495 0.578125 5.05859 0.578125H22.9688ZM25.457 15.8906V5.60938C25.457 4.91667 25.2109 4.33333 24.7188 3.85938C24.2448 3.36719 23.6615 3.12109 22.9688 3.12109H5.05859C4.36589 3.12109 3.77344 3.36719 3.28125 3.85938C2.78906 4.33333 2.54297 4.91667 2.54297 5.60938V15.8906C2.54297 16.5833 2.78906 17.1758 3.28125 17.668C3.77344 18.1419 4.36589 18.3789 5.05859 18.3789H22.9688C23.6615 18.3789 24.2448 18.1419 24.7188 17.668C25.2109 17.1758 25.457 16.5833 25.457 15.8906Z" fill="#BFC4F3"/>
              </svg>

              YouTube
          </a>

          <div className="border-t border-black h-px mb-3" />
        </div>

      </footer>

      <div className="bg-logo-blue text-[#BFC4F3]" style={{ padding: "0 10%", paddingBottom: "128px"}}>
        <hr className="mb-4 border-t border-black h-px" />

        <div className="flex justify-end space-x-8">
          <p className="text-[#5c5e5f]"> © 2023 Fist d.o.o. </p>
          <p> · </p>
          <p> Pravila in pogoji uporabe </p>
          <p> · </p>
          <p> Piškotki in zasebnost </p>
          <p> · </p>
          <p> Oblikovanje in razvoj spletnih strani: Humanfrog </p>
        </div>
      </div>
    </>
  );
};

export default Footer;