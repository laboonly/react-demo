/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */

const menuList = [
    {
        title: "首页",
        path: "/dashboard",
        icon: "home",
        roles: ["admin", "editor", "guest"]
    },
    {
        title: "游戏",
        path: "/game",
        icon: "game",
        roles: ["admin", "editor", "guest"]
    },
    {
        title: "表格",
        path: "/table",
        icon: "table",
        roles: ["admin", "editor", "guest"]
    },
    {
        title: "计划列表",
        path: "/todoList",
        icon: "todo",
        roles: ["admin", "editor", "guest"]
    },
    {
        title: "用户管理",
        path: "/user",
        icon: "user",
        roles: ["admin", "editor"]
    },
    {
        title: "Demo",
        path: "/demo",
        icon: "user",
        roles: ["admin", "editor"]
    },
    {
        title: "Iframe",
        path: "/iframe",
        icon: "user",
        roles: ["admin", "editor"]
    }
]

export default menuList