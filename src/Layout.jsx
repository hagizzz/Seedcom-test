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

  const [bgColor, setBgColor] = useState(false);
  const [title, setTitle] = useState("");

  function onActive() {
    setBgColor(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(scrollY);
      if (scrollY >= 400) {
        onActive();
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
        <Stack width={"20%"} gap={2}>
          {leftItems.map((item, index) => (
            <Stack
              key={index}
              bgcolor={item.title == title && bgColor ? "red" : ""}
            >
              <Button
                onClick={() => {
                  setTitle(item.title);
                  setBgColor(true);
                }}
              >
                <Stack>
                  <Avatar>item</Avatar>
                  <Typography variant="body1" color="initial">
                    {item.title}
                  </Typography>
                </Stack>
              </Button>
            </Stack>
          ))}
        </Stack>

        <Stack gap={2}>
          <Stack>
            {menu1.map((item, index) => (
              <Stack key={index} bgcolor={bgColor && title ? "red" : ""}>
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
            <Stack>
              {menu2.map((item, index) => (
                <Stack key={index}>
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
