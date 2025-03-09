
import { Menu, MenuItem, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
//import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import carque from "../../Images/carque.png";
import key from "../../Images/key.jpg";
import jeepImage from "../../Images/Jeep.png";
import spinnyLogo from "../../Images/spinny_logo.png";
import {
  Autocomplete,
  Box,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

// // Navigation menu items data
// const navMenuItems = [
//   { id: 1, label: "Buy Car" },
//   { id: 2, label: "Sell Car" },
//   { id: 3, label: "More" },
// ];

// Filter options data
const filterOptions = [
  { id: 1, label: "Prize Range" },
  { id: 2, label: "Make And Model" },
  { id: 3, label: "Year" },
  { id: 4, label: "Fuel" },
  { id: 5, label: "KM Driven" },
  { id: 6, label: "Body Type" },
  { id: 7, label: "Transmission" },
];
// Function for price range formatting
const priceRanges = [
  "Under 3 Lakhs",
  "3 - 4 Lakhs",
  "4 - 5 Lakhs",
  "5 - 6 Lakhs",
];
//Make and Model options
const makeAndModelOptions = [
  "Maruti Suzuki",
  "Renault",
  "Tata",
  "Mahindra",
  "Skoda",
];
// Year options
const yearOptions = [
  "2022 and above",
  "2020 and above",
  "2018 and above",
  "2016 and above",
  "2014 and above",
  "2012 and above",
  "2010 and above",
  "2008 and above",
];
// Fuel options
const fuelOptions = ["Petrol", "Diesel", "CNG", "Electric"];
// KM Driven options
const kmDrivenOptions = [
  "10,000kms or less",
  "30,000kms or less",
  "50,000kms or less",
  "75,000kms or less",
  "1,00,000kms or less",
  "1,25,000kms or less",
  "1,50,000kms or less",
];
// Body Type options
const bodyTypeOptions = ["Hatchback", "Sedan", "SUV", "MUV"];
// Transmission options
const transmissionOptions = ["Manual", "Automatic"];
//Carousel items data
const carouselItems = [
  {
    image: carque,
    title: "Finance your car,\non your own terms",
    subtitle: "Now with zero down payment options",
    buttonText: "Check eligibility",
  },
  {
    image: jeepImage,
    title: "Drive home your dream car",
    subtitle: "Easy financing options available",
    buttonText: "Explore options",
  },
  {
    image: key,
    title: "Upgrade your ride today",
    subtitle: "Affordable plans for every budget",
    buttonText: "Get started",
  },
];

//Cities
const cities = ["Hyderabad", "Bangalore", "Chennai", "Mumbai", "Delhi"];
  

export const Desktop = () => {
  const [buyCarAnchor, setBuyCarAnchor] = useState(null);
  const isBuyCarOpen = Boolean(buyCarAnchor);

  const [sellCarAnchor, setSellCarAnchor] = useState(null);
  const isSellCarOpen = Boolean(sellCarAnchor);

  const handleBuyCarClick = (event) => {
    setBuyCarAnchor(event.currentTarget);
  };

  const handleBuyCarClose = () => {
    setBuyCarAnchor(null);
  };
  //Sell car
  const handleSellCarClick = (event) => {
    setSellCarAnchor(event.currentTarget);
  };

  const handleSellCarClose = () => {
    setSellCarAnchor(null);
  };
  //More
  const [moreAnchor, setMoreAnchor] = useState(null);
  const isMoreOpen = Boolean(moreAnchor);

  const handleMoreClick = (event) => {
    setMoreAnchor(event.currentTarget);
  };

  const handleMoreClose = () => {
    setMoreAnchor(null);
  };
  //Account
  const [accountAnchor, setAccountAnchor] = useState(null);
  const isAccountOpen = Boolean(accountAnchor);

  const handleAccountClick = (event) => {
    setAccountAnchor(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAccountAnchor(null);
  };
//Price Range
const [selectedPrice, setSelectedPrice] = useState("");
//Make and Model
const [selectedMakeModel, setSelectedMakeModel] = useState("");
//Year
const [selectedYear, setSelectedYear] = useState("");
// State for Fuel selection
const [selectedFuel, setSelectedFuel] = useState("");
// State for KM Driven selection
const [selectedKmDriven, setSelectedKmDriven] = useState("");
// State for Body Type selection
const [selectedBodyType, setSelectedBodyType] = useState("");
// State for Transmission selection
const [selectedTransmission, setSelectedTransmission] = useState("");



  // const handleNavigate = () => {
  //   navigate("/cars"); // Redirect to Cars.jsx
  // };
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "1920px", height: "1080px" }}>
        <Carousel controls={true} indicators={true} interval={3000}>
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index}>
              {/* <Carousel.Item key={index} onClick={handleNavigate} style={{ cursor: "pointer" }}> */}
              <Box
                component="img"
                src={item.image}
                alt={`Slide ${index + 1}`}
                sx={{
                  width: "100%",
                  height: "800px",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "300px",
                  left: "65px",
                  color: "text.primary",
                  zIndex: 1,
                }}
              >
                <Typography
                  variant="h1"
                  sx={{ fontSize: "64px", fontWeight: 700, lineHeight: 1.2, maxWidth: "600px" }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ mt: 2, mb: 4, fontWeight: 400 }}
                >
                  {item.subtitle}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#e91e63",
                    color: "text.primary",
                    borderRadius: "30px",
                    px: 4,
                    py: 1.5,
                    fontSize: "18px",
                    "&:hover": {
                      bgcolor: "#c2185b",
                    },
                  }}
                >
                  {item.buttonText}
                </Button>
              </Box>
            </Carousel.Item>
          ))}
        </Carousel>
      </Box>

      {/* Main Header */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "166px",
          top: 0,
          left: 0,
        }}
      >
        {/* Top Navigation Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100px",
            position: "absolute",
            top: 0,
            left: 0,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "100px",
              position: "relative",
              width: "100%",
              bgcolor: "primary.main",
              p: 2.5,
            }}
          >
            {/* Logo */}
            <Box
              sx={{
                display: "inline-flex",
                position: "absolute",
                top: "17px",
                left: "30px",
                gap: 2.5,
              }}
            >
              <Box
                component="img"
                src={spinnyLogo}
                alt="Spinny Logo"
                sx={{
                  position: "relative",
                  width: "180px",
                  height: "63px",
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* City Selector */}
            <Box
              sx={{
                position: "absolute",
                width: "150px",
                height: "182px",
                top: "27px",
                left: "250px",
              }}
            >
              <Box sx={{ height: "182px" }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "150px",
                    height: "49px",
                    bgcolor: "primary.main",
                    borderRadius: "18px",
                    overflow: "hidden",
                    border: "1px solid",
                    borderColor: "primary.light",
                  }}
                >
                  <Select
                    value=""
                    displayEmpty
                    sx={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      color: "text.primary",
                      "& .MuiSelect-select": {
                        paddingTop: "14px",
                        textAlign: "center",
                      },
                      backgroundColor: "primary.main", // Light purple background
                    }}
                    IconComponent={KeyboardArrowDownIcon}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          backgroundColor: "primary.light",
                        },
                      },
                    }}
                    renderValue={() => "City"}
                  >
                    {cities.map((city) => (
                      <MenuItem
                        key={city}
                        value={city}
                        sx={{
                          backgroundColor: "primary.light", // Dropdown background
                          "&:hover": {
                            backgroundColor: "#63268B", // Darker purple on hover
                          },
                        }}
                      >
                        {city}
                      </MenuItem>
                    ))}
                  </Select>
                </Box>
              </Box>
            </Box>

            {/* Search Bar */}
            <Box
              sx={{
                position: "absolute",
                width: "418px",
                height: "218px",
                top: "22px",
                left: "433px",
              }}
            >
              <Autocomplete
                options={[]}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder="Search"
                    variant="outlined"
                    sx={{
                      height: "55px",
                      borderRadius: "15px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "15px",
                        border: "1px solid",
                        borderColor: "primary.light",
                        bgcolor: "transparent",
                        color: "text.secondary",
                        fontStyle: "italic",
                        textAlign: "center",
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                      },
                    }}
                  />
                )}
              />
            </Box>

            {/* Navigation Menu Items */}
            {/* Buy car */}
            <Box
              sx={{
                position: "absolute",
                width: "150px",
                height: "49px",
                top: "27px",
                left: "857px",
              }}
            >
              <Button
                onClick={handleBuyCarClick}
                sx={{
                  width: "100%",
                  height: "100%",
                  color: "text.primary",
                  bgcolor: "primary.main",
                  "&:hover": { bgcolor: "#63268B" },
                }}
              >
                Buy Car <KeyboardArrowDownIcon />
              </Button>

              <Menu
                anchorEl={buyCarAnchor}
                open={isBuyCarOpen}
                onClose={handleBuyCarClose}
                MenuListProps={{ sx: { backgroundColor: "primary.light" } }}
              >
                {["Buy Car Online", "Buy Cars in Hyderabad", "Buy Cars in Bangalore", "Buy Cars in Mumbai"].map((option) => (
                  <MenuItem
                    key={option}
                    onClick={handleBuyCarClose}
                    sx={{
                      backgroundColor: "primary.light",
                      "&:hover": { backgroundColor: "#63268B", color: "white" },
                    }}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* Sell car */}
            <Box
              sx={{
                position: "absolute",
                width: "150px",
                height: "49px",
                top: "27px",
                left: "1007px",
              }}
            >
              <Button
                onClick={handleSellCarClick}
                sx={{
                  width: "100%",
                  height: "100%",
                  color: "text.primary",
                  bgcolor: "primary.main",
                  "&:hover": { bgcolor: "#63268B" },
                }}
              >
                Sell Car <KeyboardArrowDownIcon />
              </Button>

              <Menu
                anchorEl={sellCarAnchor}
                open={isSellCarOpen}
                onClose={handleSellCarClose}
                MenuListProps={{ sx: { backgroundColor: "primary.light" } }}
              >
                {["Sell Car Online", "Sell Cars in Hyderabad", "Sell Cars in Bangalore", "Sell Cars in Mumbai"].map((option) => (
                  <MenuItem
                    key={option}
                    onClick={handleSellCarClose}
                    sx={{
                      backgroundColor: "primary.light",
                      "&:hover": { backgroundColor: "#63268B", color: "white" },
                    }}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            {/* More Dropdown */}
            <Box
              sx={{
                position: "absolute",
                width: "150px",
                height: "49px",
                top: "27px",
                left: "1157px", // Adjusted for positioning
              }}
            >
              <Button
                onClick={handleMoreClick}
                sx={{
                  width: "100%",
                  height: "100%",
                  color: "text.primary",
                  bgcolor: "primary.main",
                  "&:hover": { bgcolor: "#63268B" },
                }}
              >
                More <KeyboardArrowDownIcon />
              </Button>

              <Menu
                anchorEl={moreAnchor}
                open={isMoreOpen}
                onClose={handleMoreClose}
                MenuListProps={{ sx: { backgroundColor: "primary.light" } }}
              >
                {["About Us", "Car Finance", "Spinny Care", "How it Works"].map((option) => (
                  <MenuItem
                    key={option}
                    onClick={handleMoreClose}
                    sx={{
                      backgroundColor: "primary.light",
                      "&:hover": { backgroundColor: "#63268B", color: "white" },
                    }}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Shortlisted Button */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "113px",
                alignItems: "center",
                gap: "7px",
                padding: "7px 11px",
                position: "absolute",
                top: 2,
                left: "1341px",
                bgcolor: "primary.main",
              }}
            >
              <FavoriteIcon sx={{ width: "41.33px", height: "43px" }} />
              <Typography
                sx={{
                  alignSelf: "stretch",
                  fontFamily: "'Montserrat', Helvetica",
                  fontStyle: "italic",
                  color: "text.primary",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              >
                Shortlisted
              </Typography>
            </Box>

            {/* Account Button */}
            <Box
              sx={{
                position: "absolute",
                width: "150px",
                height: "49px",
                top: "27px",
                left: "1507px", // Adjust position as needed
              }}
            >
              <Button
                onClick={handleAccountClick}
                sx={{
                  width: "100%",
                  height: "100%",
                  color: "text.primary",
                  bgcolor: "primary.main",
                  "&:hover": { bgcolor: "#63268B" },
                }}
              >
                Account <KeyboardArrowDownIcon />
              </Button>

              <Menu
                anchorEl={accountAnchor}
                open={isAccountOpen}
                onClose={handleAccountClose}
                MenuListProps={{ sx: { backgroundColor: "primary.light" } }}
              >
                {["Your Account", "Login/Sign Up"].map((option) => (
                  <MenuItem
                    key={option}
                    onClick={handleAccountClose}
                    sx={{
                      backgroundColor: "primary.light",
                      "&:hover": { backgroundColor: "#63268B", color: "white" },
                    }}
                  >
                    {option}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Call Us Section */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "155px",
                position: "absolute",
                top: "19px",
                left: "1695px",
                gap: 4,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Montserrat', Helvetica",
                  color: "text.primary",
                  fontSize: "16px",
                  textAlign: "center",
                  marginTop: "-1px",
                }}
              >
                Call us at
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Montserrat', Helvetica",
                  color: "text.primary",
                  fontSize: "24px",
                  textAlign: "center",
                  height: "29px",
                }}
              >
                727-727-7275
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Filter Bar */}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "66px",
            top: "100px",
            left: 0,
            bgcolor: "primary.light",
            overflow: "hidden",
          }}
        >
          <Typography
            sx={{
              position: "absolute",
              height: "20px",
              top: "12px",
              left: "40px",
              fontFamily: "'Montserrat', Helvetica",
              fontWeight: 500,
              fontStyle: "italic",
              color: "secondary.main",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            Explore By
          </Typography>

          {/* Filter Options */}
          {filterOptions.map((option, index) => {
            // Calculate left position based on index
            let leftPosition;
            if (index === 0) {
              leftPosition = "194px";
            } else if (index === 1) {
              leftPosition = "384px";
            } else if (index === 2) {
              leftPosition = "587px";
            } else if (index === 3) {
              leftPosition = "785px";
            } else if (index === 4) {
              leftPosition = "985px";
            } else if (index === 5) {
              leftPosition = "1185px";
            } else {
              leftPosition = "1387px";
            }

            return (
              <Box
                key={option.id}
                sx={{
                  position: "absolute",
                  width: "176px",
                  height: "182px",
                  top: 0,
                  left: leftPosition,
                }}
              >
                <Box sx={{ width: "167px", height: "182px" }}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "176px",
                      height: "49px",
                    }}
                  >
                    <Box sx={{ width: "100%" }}>
                      {option.label === "Prize Range" ? (
                        <Select
                        value={selectedPrice}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                        displayEmpty
                        renderValue={(selected) => {
                          // Show "Price Range" as placeholder if nothing is selected
                          return selected ? selected : "Price Range";
                        }}
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "49px",
                          top: 0,
                          left: 0,
                          bgcolor: "primary.light", // Make sure this is the same as "Buy Car"
                          color: "text.primary",
                          // borderRadius: "8px", // Add border-radius if needed
                          // border: "1px solid #ccc", // Match Buy Car dropdown border
                          "& .MuiSelect-select": {
                            paddingTop: "18px",
                            textAlign: "center",
                            fontWeight: "bold", // Ensure the same font styling
                            color: "white", // Ensure text is visible on primary.main background
                          },
                          "&:hover": {
                            bgcolor: "#63268B", // Match "More" dropdown hover color
                          },
                          "&.Mui-focused": {
                            bgcolor: "#561381", // Change background when focused
                          },
                        }}
                        MenuProps={{
                          PaperProps: {
                            sx: {
                              bgcolor: "#561381", // Ensure entire dropdown menu is #561381
                              color: "white",
                            },
                          },
                        }}
                        IconComponent={KeyboardArrowDownIcon}
                      >
                        {priceRanges.map((range, index) => (
                          <MenuItem key={index} value={range}
                          sx={{
                            backgroundColor: "primary.light",
                            "&:hover": { backgroundColor: "#63268B", color: "white" }, // Match More dropdown hover
                          }}
                          >
                            {range}
                          </MenuItem>
                        ))}
                      </Select>
                      
                      ) : option.label === "Make And Model" ? (
                        // Make and Model Dropdown
                        <Select
                          value={selectedMakeModel}
                          onChange={(e) => setSelectedMakeModel(e.target.value)}
                          displayEmpty
                          renderValue={(selected) => (selected ? selected : "Make And Model")}
                          sx={{
                            position: "absolute",
                            width: "100%",
                            height: "49px",
                            top: 0,
                            left: 0,
                            bgcolor: "primary.light",
                            color: "text.primary",
                            "& .MuiSelect-select": {
                              paddingTop: "18px",
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "white",
                            },
                            "&:hover": {
                              bgcolor: "#63268B",
                            },
                            "&.Mui-focused": {
                              bgcolor: "#561381",
                            },
                          }}
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                bgcolor: "#561381",
                                color: "white",
                              },
                            },
                          }}
                          IconComponent={KeyboardArrowDownIcon}
                        >
                          {makeAndModelOptions.map((model, index) => (
                            <MenuItem
                              key={index}
                              value={model}
                              sx={{
                                backgroundColor: "primary.light",
                                "&:hover": { backgroundColor: "#63268B", color: "white" },
                              }}
                            >
                              {model}
                            </MenuItem>
                          ))}
                        </Select>
                      )
                      : option.label === "Year" ? (
                        // Year Dropdown
                        <Select
                          value={selectedYear}
                          onChange={(e) => setSelectedYear(e.target.value)}
                          displayEmpty
                          renderValue={(selected) => (selected ? selected : "Year")}
                          sx={{
                            position: "absolute",
                            width: "100%",
                            height: "49px",
                            top: 0,
                            left: 0,
                            bgcolor: "primary.light",
                            color: "text.primary",
                            "& .MuiSelect-select": {
                              paddingTop: "18px",
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "white",
                            },
                            "&:hover": {
                              bgcolor: "#63268B",
                            },
                            "&.Mui-focused": {
                              bgcolor: "#561381",
                            },
                          }}
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                bgcolor: "#561381",
                                color: "white",
                              },
                            },
                          }}
                          IconComponent={KeyboardArrowDownIcon}
                        >
                          {yearOptions.map((year, index) => (
                            <MenuItem
                              key={index}
                              value={year}
                              sx={{
                                backgroundColor: "primary.light",
                                "&:hover": { backgroundColor: "#63268B", color: "white" },
                              }}
                            >
                              {year}
                            </MenuItem>
                          ))}
                        </Select>
                      )
                      :option.label === "Fuel" ? (
                        <Select
                          value={selectedFuel}
                          onChange={(e) => setSelectedFuel(e.target.value)}
                          displayEmpty
                          renderValue={(selected) => (selected ? selected : "Fuel")}
                          sx={{
                            position: "absolute",
                            width: "100%",
                            height: "49px",
                            top: 0,
                            left: 0,
                            bgcolor: "primary.light",
                            color: "text.primary",
                            "& .MuiSelect-select": {
                              paddingTop: "18px",
                              textAlign: "center",
                              fontWeight: "bold",
                              color: "white",
                            },
                            "&:hover": {
                              bgcolor: "#63268B",
                            },
                            "&.Mui-focused": {
                              bgcolor: "#561381",
                            },
                          }}
                          MenuProps={{
                            PaperProps: {
                              sx: {
                                bgcolor: "#561381",
                                color: "white",
                              },
                            },
                          }}
                          IconComponent={KeyboardArrowDownIcon}
                        >
                          {fuelOptions.map((fuel, index) => (
                            <MenuItem
                              key={index}
                              value={fuel}
                              sx={{
                                backgroundColor: "primary.light",
                                "&:hover": { backgroundColor: "#63268B", color: "white" },
                              }}
                            >
                              {fuel}
                            </MenuItem>
                          ))}
                        </Select>
                      )
                      :option.label === "KM Driven" ? (
                      // KM Driven Dropdown
                        <Select
                          value={selectedKmDriven}
                          onChange={(e) => setSelectedKmDriven(e.target.value)}
                          displayEmpty
                          renderValue={(selected) => (selected ? selected : "KM Driven")}
                          sx={{
                            position: "absolute",
                            width: "100%",
                            height: "49px",
                            top: 0,
                            left: 0,
                            bgcolor: "primary.light",
                            color: "text.primary",
                            "& .MuiSelect-select": { paddingTop: "18px", textAlign: "center", fontWeight: "bold", color: "white" },
                            "&:hover": { bgcolor: "#63268B" },
                            "&.Mui-focused": { bgcolor: "#561381" },
                          }}
                          MenuProps={{ PaperProps: { sx: { bgcolor: "#561381", color: "white" } } }}
                          IconComponent={KeyboardArrowDownIcon}
                        >
                          {kmDrivenOptions.map((km, index) => (
                            <MenuItem key={index} value={km} sx={{ backgroundColor: "primary.light", "&:hover": { backgroundColor: "#63268B", color: "white" } }}>
                              {km}
                            </MenuItem>
                          ))}
                        </Select>
                      )
                      :option.label === "Body Type" ? (
                        // Body Type Dropdown
                        <Select
                          value={selectedBodyType}
                          onChange={(e) => setSelectedBodyType(e.target.value)}
                          displayEmpty
                          renderValue={(selected) => (selected ? selected : "Body Type")}
                          sx={{
                            position: "absolute",
                            width: "100%",
                            height: "49px",
                            top: 0,
                            left: 0,
                            bgcolor: "primary.light",
                            color: "text.primary",
                            "& .MuiSelect-select": { paddingTop: "18px", textAlign: "center", fontWeight: "bold", color: "white" },
                            "&:hover": { bgcolor: "#63268B" },
                            "&.Mui-focused": { bgcolor: "#561381" },
                          }}
                          MenuProps={{ PaperProps: { sx: { bgcolor: "#561381", color: "white" } } }}
                          IconComponent={KeyboardArrowDownIcon}
                        >
                          {bodyTypeOptions.map((type, index) => (
                            <MenuItem key={index} value={type} sx={{ backgroundColor: "primary.light", "&:hover": { backgroundColor: "#63268B", color: "white" } }}>
                              {type}
                            </MenuItem>
                          ))}
                        </Select>
                      )
                      :option.label === "Transmission" ? (
                        //Transmission Dropdown
                        <Select
                          value={selectedTransmission}
                          onChange={(e) => setSelectedTransmission(e.target.value)}
                          displayEmpty
                          renderValue={(selected) => (selected ? selected : "Transmission")}
                          sx={{
                            position: "absolute",
                            width: "100%",
                            height: "49px",
                            top: 0,
                            left: 0,
                            bgcolor: "primary.light",
                            color: "text.primary",
                            "& .MuiSelect-select": { paddingTop: "18px", textAlign: "center", fontWeight: "bold", color: "white" },
                            "&:hover": { bgcolor: "#63268B" },
                            "&.Mui-focused": { bgcolor: "#561381" },
                          }}
                          MenuProps={{ PaperProps: { sx: { bgcolor: "#561381", color: "white" } } }}
                          IconComponent={KeyboardArrowDownIcon}
                        >
                          {transmissionOptions.map((trans, index) => (
                            <MenuItem key={index} value={trans} sx={{ backgroundColor: "primary.light", "&:hover": { backgroundColor: "#63268B", color: "white" } }}>
                              {trans}
                            </MenuItem>
                          ))}
                        </Select>
                      ) 
                      : (
                      //default Dropdown for sub header
                        <Select
                          value=""
                          displayEmpty
                          sx={{
                            position: "absolute",
                            width: "100%",
                            height: "49px",
                            top: 0,
                            left: 0,
                            bgcolor: "primary.light", // Keep the same style as other filters
                            color: "text.primary",
                            "& .MuiSelect-select": {
                              paddingTop: "11px",
                              textAlign: "center",
                            },
                          }}
                          IconComponent={KeyboardArrowDownIcon}
                        >
                          <MenuItem value="">
                            <Typography sx={{ textAlign: "center" }}>
                              {option.label}
                            </Typography>
                          </MenuItem>
                        </Select>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>


    </Box>
  );
};