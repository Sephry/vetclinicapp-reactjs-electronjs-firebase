import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SidebarCom = () => {
  return (
    <Sidebar className="transition-colors text-gray-400 duration-300 dark:hover:text-gray-200 ">
      <div class="fixed flex flex-col w-64 h-screen px-4 py-8  border-r  dark:border-gray-700 dark:bg-gray-900">
        <Link to="/" class="text-3xl font-semibold text-gray-800 dark:text-white">
          Veterinary App
        </Link>

        <div class="flex flex-col justify-between flex-1 mt-6 submenu">
          <Menu>
            <SubMenu label="Müşteri İşlemleri" className="mx-2 font-medium">
              <MenuItem routerLink={<Link to="/addPetOwnerScreen" />} className="dark:bg-gray-900">
                Hayvan Sahibi Ekle
              </MenuItem>
              <MenuItem className="dark:bg-gray-900">
                Hayvan Sahibi Ara
              </MenuItem>
              <MenuItem  routerLink={<Link to="/petOwnerList" />}  className="dark:bg-gray-900">
                Hayvan Sahibi Listesi
              </MenuItem>
            </SubMenu>

            <SubMenu label="Hayvan İşlemleri" className="mx-2 font-medium">
              <MenuItem routerLink={<Link to="/addAnimal" />} className="dark:bg-gray-900">Yeni Hayvan Ekle</MenuItem>
              <MenuItem className="dark:bg-gray-900">Hayvan Ara</MenuItem>
              <MenuItem routerLink={<Link to="/animalList" />} className="dark:bg-gray-900">
                Hayvan Listesi
              </MenuItem>
            </SubMenu>

            <SubMenu
              label="Muhasebe İşlemleri"
              className="mx-2 font-medium"
            ></SubMenu>

            <hr class="my-6 border-gray-200 dark:border-gray-600" />

            <MenuItem className="mx-2 font-medium">Çıkış Yap</MenuItem>
          </Menu>

          <div class="flex items-center px-4 -mx-2 pt-5 border-t border-gray-600">
            <img
              class="object-cover mx-2 rounded-full h-9 w-9"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="avatar"
            />
            <h4 class="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
              Hasan Özdemir
            </h4>
          </div>
        </div>
      </div>
    </Sidebar>
  );
};

export default SidebarCom;
