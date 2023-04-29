"use client";

import React from "react";
import Avatar from "./Avatar";
import { User } from "@prisma/client";

interface UserInfoProps {
    user?: User;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
    return (
        <main className="flex items-center space-x-2 border-[1px] border-blue-400 text-blue-500 w-fit p-2 rounded-full ">
            <Avatar src={user?.image} hasBorder />
            <div>
                <h2 className="text-xl">{user?.name}</h2>
            </div>
        </main>
    );
};

export default UserInfo;
