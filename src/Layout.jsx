import { Typography, Stack, Avatar, Grid2, Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";
import icon from "./assets/item.png";

function Layout() {
  const leftItems = [
    {
      title: "Khuyến mãi HOT",
      icon: "",
      id: "menu1",
    },
    {
      title: "Menu item",
      icon: "",
      id: "menu2",
    },
    {
      title: "Menu item",
      icon: "",
      id: "menu",
    },
    {
      title: "Menu item",
      icon: "",
      id: "menu",
    },
    {
      title: "Menu item",
      icon: "",
      id: "menu",
    },
    {
      title: "Menu item",
      icon: "",
      id: "menu",
    },
    {
      title: "Menu item",
      icon: "",
      id: "menu",
    },
    {
      title: "Menu item",
      icon: "",
      id: "menu",
    },
  ];

  const menu1 = [
    {
      subHeader: "Theo chương trình khuyến mãi",
      subItem: [
        {
          title: "Mua nhiều tiết kiệm",
          icon: "",
        },
        {
          title: "Ưu đãi online",
          icon: "",
        },
        {
          title: "Giá tốt",
          icon: "",
        },
        {
          title: "Ưu đãi hàng tuần",
          icon: "",
        },
      ],
    },

    {
      subHeader: "Theo ngành hàng",
      subItem: [
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
        {
          title: "MenuItem",
          icon: "",
        },
      ],
    },
  ];

  const menu2 = [
    {
      subHeader: "Thế giới trái cây",
      items: [
        {
          title: "Trái cây nhập khẩu",
        },
        {
          title: "Nội địa",
        },
      ],
    },

    {
      subHeader: "CateLevel1",
      items: [
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
      ],
    },

    {
      subHeader: "CateLevel2",
      items: [
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
      ],
    },

    {
      subHeader: "CateLevel2",
      items: [
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
        {
          title: "MenuItem",
        },
      ],
    },
  ];

  const [address, setAddress] = useState("menu1");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          if (scrollY < 800) {
            setAddress("menu1");
          } else {
            setAddress("menu2");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid2 m={1}>
      <Stack width={"25%"} position={"fixed"}>
        {leftItems.map((item, index) => (
          <Stack
            key={index}
            bgcolor={item.id == address ? "#E6F1FF" : ""}
            sx={{
              borderTopLeftRadius: 8,
              borderBottomLeftRadius: 8,
            }}
          >
            <a href={`#${item.id}`}>
              <Button
                fullWidth
                sx={{
                  textTransform: "none",
                }}
              >
                <Stack alignItems={"center"}>
                  <Avatar src={icon}>item</Avatar>
                  <Typography
                    variant="body1"
                    color={item.id == address ? "primary" : "initial"}
                  >
                    {item.title}
                  </Typography>
                </Stack>
              </Button>
            </a>
          </Stack>
        ))}
      </Stack>

      <Stack id="menu1" ml={"25%"}>
        <Stack>
          {menu1.map((item, index) => (
            <Stack
              key={index}
              bgcolor={address == "menu1" ? "#E6F1FF" : ""}
              px={2}
              py={1}
            >
              <Typography variant="subtitle2" fontWeight={700} pb={2}>
                {item.subHeader}
              </Typography>
              <Grid2 width={"100%"} container spacing={3}>
                {item.subItem.map((subItem, index) => (
                  <Grid2
                    size={4}
                    justifyContent={"center"}
                    alignItems={"center"}
                    key={index}
                  >
                    <Stack alignItems={"center"}>
                      <Avatar src={icon}>item</Avatar>
                      <Typography
                        variant="body1"
                        color="initial"
                        textAlign={"center"}
                      >
                        {subItem.title}
                      </Typography>
                    </Stack>
                  </Grid2>
                ))}
              </Grid2>
              {index < menu1.length - 1 && <Divider sx={{ my: 2 }} />}
              {/* <Divider /> */}
            </Stack>
          ))}
          <Divider />
        </Stack>

        <Stack>
          <Stack id="menu2">
            {menu2.map((item, index) => (
              <Stack
                key={index}
                bgcolor={address == "menu2" ? "#E6F1FF" : ""}
                px={2}
                py={1}
              >
                <Typography variant="subtitle2" fontWeight={700}>
                  {item.subHeader}
                </Typography>

                <Grid2 width={"100%"} container spacing={3}>
                  {item.items.map((subItem, index) => (
                    <Grid2
                      size={4}
                      justifyContent={"center"}
                      alignItems={"center"}
                      key={index}
                      my={2}
                    >
                      <Stack alignItems={"center"}>
                        <Avatar src={icon}>item</Avatar>
                        <Typography
                          variant="body1"
                          color="initial"
                          textAlign={"center"}
                        >
                          {subItem.title}
                        </Typography>
                      </Stack>
                    </Grid2>
                  ))}
                </Grid2>
                <Button
                  fullWidth
                  sx={{
                    textTransform: "none",
                    bgcolor: "#E6F1FF",
                    borderRadius: 10,
                    my: 1,
                    mb: 2,
                  }}
                >
                  <Typography variant="body1" color="primary">
                    Xem tất cả
                  </Typography>
                </Button>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
      {/* </Stack> */}
    </Grid2>
  );
}

export default Layout;
