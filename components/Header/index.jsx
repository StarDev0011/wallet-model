import {
  HeaderCenter,
  HeaderTop,
  HeaderWrapper,
  Logo,
  MenuItems,
  SocialItems
} from "./styles";

import Link from "next/link";
import { SiteButton } from "../../atoms/SiteButton";
import { MenuContainer } from "../../atoms/SiteContainer";
import { menuData } from "../../data/menu";
import { socialData } from "../../data/social";
import {useRouter} from 'next/router';

const Header = () => {
  const router = useRouter()
  return (
    <MenuContainer>
      <HeaderWrapper>
        <HeaderTop>
          <div className="social_items">
            <SocialItems>
              {socialData.map((item) => (
                <li key={item.id}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    {item.icon}
                  </a>
                </li>
              ))}
            </SocialItems>
          </div>
          <div className="header_center">
            <HeaderCenter>
              <Logo href="/">Digital Twin</Logo>
              <MenuItems>
                {menuData.map((item) => (
                  <li key={item.id}>
                    <Link href={item.link}>{item.name}</Link>
                  </li>
                ))}
              </MenuItems>
            </HeaderCenter>
          </div>
          {router.pathname == "/bidpage"?<div className="connect_wallet">
            <SiteButton>
              <Link href="/">Connect wallet</Link>
            </SiteButton>
          </div>:<></>}
        </HeaderTop>
      </HeaderWrapper>
    </MenuContainer>
  );
};

export default Header;