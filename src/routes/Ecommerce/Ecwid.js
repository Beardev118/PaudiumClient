import React, { useRef, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import { useHistory } from "react-router-dom";

import EcwidHeader from './EcwidHeader';


const useStyles = makeStyles((theme) => ({
 
  appbar: {},
}));
function Ecwid({match}) {
  const storeDiv = useRef(null);
  const scriptRef = useRef(null);
  const classes = useStyles();
  const history = useHistory();

  console.log("Ecommerce match",match)

  window.localStorage.setItem("show_ecwid_logs", "true");
  window.ecwid_script_defer = true;
  window.ecwid_dynamic_widgets = true;
  window.ec = window.ec || Object();
  window.ec.storefront = window.ec.storefront || Object();
  window.ec.enable_catalog_on_one_page = true;
  window._xnext_initialization_scripts = [
    {
      widgetType: "ProductBrowser",
      id: "my-store-33129315",
      arg: ["id=productBrowser", "views=grid(20,3)"],
    },
    {
      widgetType: "CategoriesV2",
      id: "my-categories-33129315",
      arg: ["id=categoriesV2"],
    },
    {
      widgetType: "SearchWidget",
      id: "my-search-33129315",
      arg: ["id=searchWidget"],
    },
  ];

  var script = document.createElement("script");
  script.charset = "utf-8";
  script.type = "text/javascript";
  script.src = "https://app.ecwid.com/script.js?33129315";
  script.defer = true;
  script.ref = scriptRef;

  useEffect(() => {
    if (!scriptRef.current) {
      storeDiv.current.appendChild(script);
    }
    window.init();
  });
  return (
    <div>
      <Box mt={3} mb={6}>
        <div id="my-search-33129315"></div>
      </Box>
      {/* <Typography variant="h5" color="secondary">
        Product
      </Typography> */}
      <Box mt={3}>
        <div id="my-categories-33129315"></div>
      </Box>
      <div id="my-store-33129315" ref={storeDiv}></div>
    </div>
  );
}

export default Ecwid;
