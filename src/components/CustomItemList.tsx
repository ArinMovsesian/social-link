import * as React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import classes from "./CustomItemList.module.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Item from "../models/Item";
import DeleteItemModal from "../UI/DeleteItemModal";
import { StringLiteralLike } from "typescript";

const CustomItemList: React.FC<{type: string; link: string; id: string; editItem: (id: string) => void}> = (props) => {
  const [showDeleteItemoModal, setShowDeleteItemoModal] = React.useState<boolean>(false);

  let soicalType = null;
  switch (props.type) {
    case "twitter":
      soicalType = (
        <>
          <TwitterIcon />
          <span>توییتر</span>
        </>
      );
      break;
    case "instagram":
      soicalType = (
        <>
          <InstagramIcon />
          <span>ایسنتاگرام</span>
        </>
      );
      break;
    case "facebook":
      soicalType = (
        <>
          <FacebookIcon />
          <span>فیسبوک</span>
        </>
      );
      break;
    default:
      break;
  }
  const openDeleteItemModal = () => {
    setShowDeleteItemoModal(true);
  }
  const closeDeleteItemoModal = () => {
    setShowDeleteItemoModal(false);
  }
  const editItemHandler = (id: string) => {
    // debugger;
    console.log('id', id);
    props.editItem(id);
  }
  return (
    <>
      <Grid container className={classes.CustomItemListContainer}>
        <Grid item xs={6}>
          <ul className={classes.CustomItemListFuncContainer}>
            <li>
              <Button startIcon={<DeleteIcon />} onClick={openDeleteItemModal}>حذف</Button>
            </li>
            <li>
              <Button startIcon={<EditIcon />} onClick={() => editItemHandler(props.id)}>ویرایش</Button>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <ul className={classes.CustomItemListDisplayContainer}>
            <li>{soicalType}</li>
            <li>
              <span>آی دی:</span>
              <span>{props.id}</span>
            </li>
            <li>
              <span>لینک</span>
              <span>{props.link}</span>
            </li>
          </ul>
        </Grid>
      </Grid>
      <DeleteItemModal open={showDeleteItemoModal} handleClose={closeDeleteItemoModal} link={props.link} id={props.id}/>
    </>
  );
};
export default CustomItemList;
