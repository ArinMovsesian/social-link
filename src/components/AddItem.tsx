import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { ItemContext } from "../store/item-context";
import Item from "../models/Item";
import { CalendarTodayTwoTone } from "@mui/icons-material";
const currencies = [
  {
    value: "instagram",
    label: "ایسنتاگرام",
  },
  {
    value: "facebook",
    label: "فیس بود",
  },
  {
    value: "twitter",
    label: "توییتر",
  },
];
const AddItem: React.FC<{
  onCloseCollapse: () => void;
}> = (props) => {
  // const [currency, setCurrency] = React.useState("instagram");
  const itemCtx = React.useContext(ItemContext);

  const formik = useFormik({
    initialValues: {
      id: "",
      link: "",
      type: "",
    },
    onSubmit: (values,actions) => {
      // alert(JSON.stringify(values));
      console.log("submit", values);

      if (!values.type || !values.link || !values.id) {
        alert("همه مقادیر پر شود.");
        return;
      }
      const existItem = itemCtx.items.find((item: Item) => {
        return (
          // item.type == values.type ||
          // item.link == values.link ||
          item.id == values.id
        );
      });
      if (existItem) {
        alert("مقدار تکراری است");
      } else {
        itemCtx.addItem(values);
        actions.resetForm({
          values: {
            // the type of `values` inferred to be Blog
            id: '',
            link: '',
            type: '',
          },
          // you can also set the other form states here
        });
      }
    },
  });
  React.useEffect(() => {
    // alert(itemCtx.item.id)
    console.log('useEffect',itemCtx.item);
   
    return () => {

    };
  }, [itemCtx.item]);
  const closeCollapseHandler = (resetForm: any) => {
    props.onCloseCollapse();
    resetForm();
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="id"
          variant="outlined"
          name="id"
          label="آی دی"
          value={formik.values.id}
          onChange={formik.handleChange}
        />
        <TextField
          id="link"
          variant="outlined"
          name="link"
          label="لینک"
          value={formik.values.link}
          onChange={formik.handleChange}
        />
        <TextField
          id="type"
          select
          name="type"
          label="نوع"
          value={formik.values.type}
          onChange={formik.handleChange}
          helperText=""
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
      <Stack spacing={2} direction="row">
        <Button variant="contained" type="submit">
          ثبت مسیر ارتباطی
        </Button>
        <Button variant="outlined" onClick={closeCollapseHandler.bind(null,formik.handleReset)}>
          انصراف
        </Button>
      </Stack>
    </form>
  );
};
export default AddItem;
