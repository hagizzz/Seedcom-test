import {
  Container,
  Typography,
  Stack,
  Avatar,
  Grid2,
  Button,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import { useEffect, useState } from "react";

function Layout() {
  const leftItems = [
    {
      title: "Khuyến mãi HOT",
      icon: "",
      id: "menu1",
    },
    {
      title: "MenuItem",
      icon: "",
      id: "menu2",
    },
    {
      title: "MenuItem",
      icon: "",
      id: "menu2",
    },
    {
      title: "MenuItem",
      icon: "",
      id: "menu2",
    },
    {
      title: "MenuItem",
      icon: "",
      id: "menu2",
    },
    {
      title: "MenuItem",
      icon: "",
      id: "menu2",
    },
    {
      title: "MenuItem",
      icon: "",
      id: "menu2",
    },
    {
      title: "MenuItem",
      icon: "",
      id: "menu2",
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

  //   const menu2 = [
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //     {
  //       title: "MenuItem",
  //       icon: "",
  //     },
  //   ];

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

  //   const [bgColor, setBgColor] = useState(false);
  //   const [title, setTitle] = useState("");
  const [address, setAddress] = useState("menu1");

  //   function onActive() {
  //     setAddress("menu2");
  //   }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(scrollY);
      if (scrollY < 400) {
        setAddress("menu1");
      } else if (scrollY >= 400) {
        setAddress("menu2");
      }
    });
    // return () => window.removeEventListener("scroll");
  }, []);

  return (
    <Container maxWidth="sm">
      <Stack
        width={"100%"}
        sx={{
          gap: 2,
          flexDirection: "row",
        }}
      >
        <Stack width={"20%"} gap={2} position={"fixed"}>
          {leftItems.map((item, index) => (
            <Stack key={index} bgcolor={item.id == address ? "red" : ""}>
              <a href={`#${item.id}`}>
                <Button>
                  <Stack>
                    <Avatar>item</Avatar>
                    <Typography variant="body1" color="initial">
                      {item.title}
                    </Typography>
                  </Stack>
                </Button>
              </a>
            </Stack>
          ))}
        </Stack>

        <Stack gap={2} id="menu1" ml={"25%"}>
          <Stack>
            {menu1.map((item, index) => (
              <Stack key={index} bgcolor={address == "menu1" ? "red" : ""}>
                <Typography variant="body1" color="initial">
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
                      <Avatar>item</Avatar>
                      <Typography variant="body1" color="initial">
                        {subItem.title}
                      </Typography>
                    </Grid2>
                  ))}
                </Grid2>
              </Stack>
            ))}
          </Stack>

          <Divider />

          <Stack>
            <Stack id="menu2">
              {menu2.map((item, index) => (
                <Stack key={index} bgcolor={address == "menu2" ? "red" : ""}>
                  <Typography variant="body1" color="initial">
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
                        <Avatar>item</Avatar>
                        <Typography variant="body1" color="initial">
                          {subItem.title}
                        </Typography>
                      </Grid2>
                    ))}
                  </Grid2>
                </Stack>
              ))}
            </Stack>
            <Divider />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Layout;
