import React from "react";
import { Tooltip } from "react-tooltip";
import {
  BoltIcon,
  CheckBadgeIcon,
  ShieldExclamationIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const ProfileBadges = () => {
  return (
    <>
      <CheckBadgeIcon
        className=" text-cyan-400 h-6 w-6 outline-none"
        data-tooltip-id="badgesInfo"
        data-tooltip-content="Verificado"
      />
      {/*<WrenchScrewdriverIcon
        className=" text-green-400 h-6 w-6 outline-none"
        data-tooltip-id="badgesInfo"
        data-tooltip-content="Programador"
      />
      <ShieldExclamationIcon
        className=" text-violet-500 h-6 w-6 outline-none"
        data-tooltip-id="badgesInfo"
        data-tooltip-content="Administrador"
      />
      <BoltIcon
        className=" text-yellow-400 h-6 w-6 outline-none"
        data-tooltip-id="badgesInfo"
        data-tooltip-content="GOD"
  />*/}
      <Tooltip id="badgesInfo" />
    </>
  );
};

export default ProfileBadges;
