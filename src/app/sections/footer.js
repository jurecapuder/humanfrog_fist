import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-logo-blue text-white grid grid-cols-4 gap-4 p-8">
      <div className="flex flex-col justify-end">
      <Image src="/fist.png" alt="Company Logo" width={167} height={79} />
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
        <h3>Prodajni Program</h3>

        <div className="border-t border-black h-px" />

        <ul>
          <li><i className="fas fa-arrow-right"></i> Polietileni </li>
          
          <li><i className="fas fa-arrow-right"></i> Folijski materiali </li>

          <li><i className="fas fa-arrow-right"></i> Stireli </li>

          <li><i className="fas fa-arrow-right"></i> Barvila in dodatki </li>

          <li><i className="fas fa-arrow-right"></i> Polipropileni </li>

          <li><i className="fas fa-arrow-right"></i> Tehnični granulati </li>
        </ul>
      </div>

      <div>
        <h3>Spremljajte Nas</h3>

        <div className="border-t border-black h-px" />

        <a href="https://www.linkedin.com/company/fist-d-o-o/" className="flex items-center gap-2">
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.9414 0.75C24.3451 0.75 25.5391 1.24219 26.5234 2.22656C27.5078 3.21094 28 4.40495 28 5.80859V23.6914C28 25.0951 27.5078 26.2891 26.5234 27.2734C25.5391 28.2578 24.3451 28.75 22.9414 28.75H5.05859C3.65495 28.75 2.46094 28.2578 1.47656 27.2734C0.492188 26.2891 0 25.0951 0 23.6914V5.80859C0 4.40495 0.492188 3.21094 1.47656 2.22656C2.46094 1.24219 3.65495 0.75 5.05859 0.75H22.9414ZM25.457 23.6914V5.80859C25.457 5.11589 25.2109 4.52344 24.7188 4.03125C24.2266 3.53906 23.6341 3.29297 22.9414 3.29297H5.05859C4.36589 3.29297 3.77344 3.53906 3.28125 4.03125C2.78906 4.52344 2.54297 5.11589 2.54297 5.80859V23.6914C2.54297 24.3841 2.78906 24.9766 3.28125 25.4688C3.77344 25.9609 4.36589 26.207 5.05859 26.207H22.9414C23.6341 26.207 24.2266 25.9609 24.7188 25.4688C25.2109 24.9766 25.457 24.3841 25.457 23.6914ZM6.45312 10.9219V22.3789H8.99609V10.9219H6.45312ZM17.2266 10.8398C18.5391 10.8398 19.5872 11.2591 20.3711 12.0977C21.1732 12.918 21.5742 14.0117 21.5742 15.3789V22.3789H19.0312V15.3789C19.0312 14.7044 18.8763 14.2031 18.5664 13.875C18.2747 13.5469 17.8281 13.3828 17.2266 13.3828C16.4974 13.3828 15.8776 13.6198 15.3672 14.0938C14.8568 14.5677 14.4284 15.0052 14.082 15.4062V22.3789H11.5391V10.9219H14.082V11.9062C14.5013 11.6146 14.9661 11.3685 15.4766 11.168C16.0052 10.9492 16.5885 10.8398 17.2266 10.8398ZM7.71094 5.94531C8.07552 5.94531 8.3763 6.07292 8.61328 6.32812C8.86849 6.5651 8.99609 6.85677 8.99609 7.20312C8.99609 7.54948 8.86849 7.85026 8.61328 8.10547C8.3763 8.36068 8.07552 8.48828 7.71094 8.48828C7.36458 8.48828 7.0638 8.36068 6.80859 8.10547C6.57161 7.85026 6.45312 7.54948 6.45312 7.20312C6.45312 6.85677 6.57161 6.5651 6.80859 6.32812C7.0638 6.07292 7.36458 5.94531 7.71094 5.94531Z" fill="#BFC4F3"/>
            </svg>
            
            LinkedIn
        </a>

        <div className="border-t border-black h-px" />

        <a href="https://www.youtube.com/@Fist_doo" className="flex items-center gap-2">
            <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.457 15.8359V5.66406L17.8281 10.7773L11.457 15.8359ZM22.9688 0.578125C24.3542 0.578125 25.5391 1.07031 26.5234 2.05469C27.5078 3.03906 28 4.22396 28 5.60938V15.8906C28 17.276 27.5078 18.4609 26.5234 19.4453C25.5391 20.4297 24.3542 20.9219 22.9688 20.9219H5.05859C3.65495 20.9219 2.46094 20.4297 1.47656 19.4453C0.492188 18.4609 0 17.276 0 15.8906V5.60938C0 4.22396 0.492188 3.03906 1.47656 2.05469C2.46094 1.07031 3.65495 0.578125 5.05859 0.578125H22.9688ZM25.457 15.8906V5.60938C25.457 4.91667 25.2109 4.33333 24.7188 3.85938C24.2448 3.36719 23.6615 3.12109 22.9688 3.12109H5.05859C4.36589 3.12109 3.77344 3.36719 3.28125 3.85938C2.78906 4.33333 2.54297 4.91667 2.54297 5.60938V15.8906C2.54297 16.5833 2.78906 17.1758 3.28125 17.668C3.77344 18.1419 4.36589 18.3789 5.05859 18.3789H22.9688C23.6615 18.3789 24.2448 18.1419 24.7188 17.668C25.2109 17.1758 25.457 16.5833 25.457 15.8906Z" fill="#BFC4F3"/>
            </svg>

            YouTube
        </a>

        <div className="border-t border-black h-px" />
      </div>

      <div className="border-t border-black h-px" />

      <div className="col-span-4 grid grid-cols-4">

        <div className="">
            <p>
                © 2023 Fist d.o.o.
                Pravila in pogoji uporabe
                Piškotki in zasebnost
                Oblikovanje in razvoj spletnih strani: Humanfro<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M9.32727 0.00694189C9.33216 0.00601125 9.34146 0.00694189 9.34146 0.00694189C10.0785 -0.0701853 10.9594 0.500532 10.9551 1.46166C10.9545 1.55798 10.9453 1.65895 10.926 1.76249C10.8239 2.31238 10.507 2.59867 10.1835 2.89008C9.96895 3.08377 9.73757 3.25094 9.52085 3.40868C9.3816 3.50966 9.24759 3.60656 9.1273 3.70358C8.77831 3.98638 8.52319 4.30268 8.28565 4.73136C8.11418 5.03929 7.8935 5.50019 7.89268 5.87198C7.89175 6.14105 8.00727 6.36313 8.34253 6.44386C8.89115 6.57601 9.60053 6.18607 10.0693 5.90141C10.6439 5.55207 11.0295 5.23879 11.3683 4.75916C11.5195 4.54605 11.6384 4.33107 11.7547 4.12249C11.9226 3.82026 12.0841 3.53048 12.3245 3.27525C13.2441 2.2997 14.86 2.87531 14.8807 4.21811C14.8807 4.24533 14.8807 4.27278 14.8797 4.30105L14.8794 4.31734C14.8468 5.08396 14.2709 5.52159 13.7514 5.71633C13.447 5.83057 13.1644 5.89571 12.8524 5.94457C12.7868 5.95481 12.7168 5.96435 12.6441 5.97447C12.4105 6.00634 12.1492 6.04229 11.9109 6.11558C11.3134 6.29891 10.7748 6.69048 10.3831 7.11439C10.1975 7.31669 9.9914 7.54575 9.81202 7.81412C9.67184 8.02468 9.56575 8.27316 9.56528 8.49721C9.56435 8.69346 9.64544 8.8704 9.85564 8.98441C10.3307 9.24371 11.0551 9.01337 11.5253 8.82759C11.9629 8.65438 12.374 8.37576 12.667 8.09925C12.7208 8.04853 12.7771 7.9935 12.8362 7.93638C13.3724 7.41325 14.1364 6.6664 15.1072 7.0432C15.4976 7.19478 15.8372 7.58437 15.9497 7.99932C15.991 8.15392 16.0056 8.30864 15.9981 8.45848C15.9964 8.49093 15.9937 8.52316 15.9898 8.55468C15.9532 8.87401 15.8175 9.1639 15.6351 9.37039C15.339 9.70717 14.9512 9.87317 14.4223 9.89865C14.0368 9.91773 13.7094 9.8741 13.3948 9.83246C13.2604 9.81466 13.1281 9.79709 12.9952 9.78453C11.9574 9.68925 11.1153 10.1363 10.383 10.5984C10.0287 10.8223 9.67487 11.0746 9.36996 11.3831C9.12672 11.6303 8.74771 12.0231 8.76586 12.4413C8.76679 12.4598 8.76819 12.4782 8.77075 12.4961C8.80076 12.7292 8.95001 12.8653 9.11311 13.0101L9.13695 13.0312C9.27934 13.1567 9.45477 13.3128 9.46966 13.5239C9.47106 13.5417 9.47152 13.559 9.47059 13.5768C9.47001 13.5799 9.47001 13.5828 9.46966 13.586C9.46931 13.5898 9.46931 13.5942 9.46885 13.5987C9.44058 13.8851 9.13311 14.0959 8.91325 14.2379C8.8217 14.2972 8.72863 14.3583 8.63522 14.4191C7.44469 15.1995 6.11655 16.0694 4.33192 15.8222C2.30719 15.5416 0.772435 14.0989 0.22161 12.2404C0.080268 11.7635 0 11.2651 0 10.7074C0 10.5434 0.00697955 10.3741 0.0215209 10.1982C0.127265 8.92473 0.632605 7.73478 1.22054 6.52913C1.23776 6.49423 1.25486 6.45864 1.27266 6.42292C1.57791 5.79904 1.91852 5.10373 1.91945 4.3833C1.9198 4.15459 1.88607 3.9224 1.80545 3.68962C1.76264 3.56596 1.71518 3.44788 1.66841 3.33097C1.59222 3.14333 1.51683 2.95709 1.46297 2.74757C1.41551 2.56086 1.39352 2.38055 1.39387 2.20885C1.39422 1.65046 1.63002 1.18246 1.97681 0.87756C2.90361 0.0641767 4.09681 0.714116 4.36077 1.63417C4.39904 1.76807 4.41591 1.91721 4.41544 2.06785C4.41486 2.30738 4.3717 2.55121 4.30342 2.74769C4.18581 3.08738 3.9963 3.35145 3.79587 3.63122C3.63812 3.85015 3.47421 4.07886 3.3331 4.36038C3.19258 4.64155 3.07404 4.96984 3.03309 5.25938C3.01634 5.38083 3.00633 5.50635 3.00633 5.63071C3.0054 6.20794 3.21829 6.75935 3.91836 6.74388C4.31319 6.73515 4.69906 6.53414 5.0178 6.34417C5.98242 5.76775 6.80546 5.04743 7.38664 4.07432C7.57708 3.75581 7.7489 3.37204 7.82905 2.98954C7.88535 2.72117 7.9035 2.45407 7.92339 2.16208C7.93305 2.02156 7.94282 1.87509 7.95771 1.71968C8.04775 0.770071 8.5033 0.112105 9.32727 0.00694189ZM11.2256 11.982C10.8307 12.3257 10.0659 13.1101 10.5973 13.7096C10.9044 14.0549 11.7134 14.3374 12.2531 14.3801C12.6514 14.4113 13.0096 14.3342 13.3005 14.179C13.7706 13.9281 14.0646 13.4716 14.0659 12.9381C14.0672 12.5331 13.9112 12.1759 13.7376 11.9677C13.4564 11.6301 12.9343 11.3851 12.425 11.4256C12.069 11.454 11.7438 11.6011 11.4666 11.7945C11.4494 11.806 11.4327 11.8176 11.416 11.8299C11.3493 11.8785 11.2859 11.9297 11.2256 11.982Z" fill="#BFC4F3" /> </svg>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;