import { Paper } from "@material-ui/core";
import React from "react";
import {Link } from "react-router-dom";


function ListPhones(){
    return (
        <Paper
          style={{
            margin: "20px auto",
            padding: "20px",
            maxWidth: "350px",
            position: "relative",
            backgroundColor: "pink",
          }} >
            <div>
            <p>
              This is our phone Catalog.
            </p>
            <img
                style={{ width: "60px" ,display: "flex", padding: "10px"}}
                src="https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP743/iphone7-jetblack_2x.png"
                alt="new"
            ></img>
            <Link to="/phone0"><button >
              Iphone 7
            </button>
            </Link>
            <img
                style={{ width: "100px" ,display: "flex", padding: "10px"}}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone11-white-select-2019_GEO_EMEA?wid=470&hei=556&fmt=png-alpha&.v=1567021770073"
                alt="new"
            ></img>
            <Link to="/phone1"><button>
              Iphone 11
            </button>
            </Link>
            <img
                style={{ width: "100px" ,display: "flex", padding: "10px"}}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-red-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343703000"
                alt="new"
            ></img>
            <Link to="/phone2"><button>
              Iphone 12
            </button>
            </Link>
            <img
                style={{ width: "100px" ,display: "flex", padding: "10px"}}
                src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-xr-white-select-201809?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1551226036668"
                alt="new"
            ></img>
            <Link to="/phone3"><button >
              Iphone XR
            </button>
            </Link>
          </div>
        </Paper>
    )}
export default ListPhones;