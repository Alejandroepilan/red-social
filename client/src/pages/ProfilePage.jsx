import React from "react";
import { Sidebar } from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";
import "./ProfilePage.css";

const ProfilePage = () => {
  const { user, logout } = useAuth();

  var avatarUrl = "https://api.multiavatar.com/" + user.username + ".svg";

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-5/6 ml-auto">
        <div className="flex items-end justify-center muro h-44">
          <div className="translate-y-[50%] w-32 h-32 rounded-full">
            <img src={avatarUrl} />
          </div>
        </div>

        <div className="flex flex-col justify-center my-24 text-black">
          <span className="flex items-center justify-center">
            @{user.username}
          </span>
          <p className=" m-24">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            bibendum eros vel tincidunt ultricies. Donec non lorem dolor. Sed et
            blandit risus. Vivamus purus nunc, consectetur nec est euismod,
            mattis placerat ante. Etiam in enim ut quam gravida mollis. Proin
            molestie mauris consequat mi bibendum congue. Proin quis neque
            molestie, suscipit nisl eu, interdum nulla. Curabitur tempus congue
            orci. Maecenas tincidunt orci sit amet sem tempor, id feugiat dolor
            blandit. In consequat, ante eget gravida mollis, quam sem tempus
            neque, luctus feugiat dui ipsum nec ex. Sed ut sollicitudin sem, vel
            mattis metus. Ut pellentesque facilisis tristique. Donec quis urna
            efficitur, rhoncus nunc vitae, commodo elit. Nullam sit amet laoreet
            ex. Etiam massa lorem, ultrices id velit venenatis, cursus faucibus
            purus. Aliquam consectetur turpis eget ante auctor accumsan. Ut quis
            enim venenatis, maximus diam pretium, maximus urna. Proin sed felis
            augue. Sed hendrerit varius tellus in molestie. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Integer vitae
            dolor ultricies, iaculis lectus nec, tempus neque. Nam sed elementum
            dolor. In eu accumsan quam. Fusce lectus erat, placerat id nibh nec,
            tempor placerat sapien. Maecenas urna neque, finibus vitae blandit
            at, luctus vel erat. Donec faucibus est eget lectus consequat
            ultricies. Sed porta convallis nulla quis egestas. Pellentesque a
            urna feugiat, tristique ex ac, efficitur libero. Fusce vel faucibus
            felis. Aliquam nec tristique lacus. Praesent fringilla turpis nisl,
            eu molestie risus viverra sit amet. Praesent turpis sem, suscipit a
            magna eget, rhoncus pellentesque lorem. Nullam in libero vestibulum,
            finibus turpis ut, elementum enim. Curabitur accumsan bibendum
            aliquam. Quisque quis pulvinar justo, vitae porttitor orci. Donec id
            elementum ex. Pellentesque sit amet ligula ipsum. Sed semper, turpis
            non accumsan mollis, justo arcu iaculis dolor, volutpat porta nisi
            tortor at ligula. Sed ultricies risus orci, non aliquam nisi
            condimentum at. In eget bibendum dui. Proin velit diam, suscipit nec
            tincidunt a, rhoncus ac turpis. Nullam fringilla ligula nec libero
            pellentesque egestas. Cras consequat felis id dui tempus,
            condimentum accumsan lectus hendrerit. Maecenas at arcu eu ante
            rutrum efficitur in at est. Vivamus ut nibh a eros molestie
            condimentum a sit amet lacus. Nullam mollis, nibh sit amet tincidunt
            fermentum, odio enim accumsan nisi, vel malesuada lectus lacus nec
            metus. Etiam efficitur risus neque, ac pulvinar ante luctus at.
            Quisque tincidunt magna non lorem consectetur scelerisque. Donec
            varius, ligula at scelerisque blandit, mi neque fermentum mi, eu
            convallis dui ligula in libero. Vestibulum sagittis in velit quis
            pretium. Nunc sit amet ullamcorper risus, et posuere nibh.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
/*
 */
