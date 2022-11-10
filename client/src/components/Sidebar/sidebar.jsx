import React from "react";
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarRoute, SidebarWrapper, SideBtnWrap, SidebarMenu } from "./SidebarElements";

const Sidebar = ( {isOpen, toggle} ) => {
  return (
    <SidebarContainer isOpen = {isOpen}  onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>Homepage</SidebarLink>
          <SidebarLink to="/login" onClick={toggle}>Login</SidebarLink>
          <SidebarLink to="/signup" onClick={toggle}>Register</SidebarLink>
          <SidebarLink to="/" onClick={toggle}>League Stats</SidebarLink>
          <SidebarLink to="/" onClick={toggle}>Referee</SidebarLink>
          <SidebarLink to="/" onClick={toggle}>About Us</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to = '/login'>Login</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
