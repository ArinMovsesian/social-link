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
        </>
      );
      break;
    case "instagram":
      soicalType = (
        <>
          <InstagramIcon />
        </>
      );
      break;
    case "facebook":
      soicalType = (
        <>
          <FacebookIcon />
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
              <Button startIcon={<DeleteIcon/>} onClick={openDeleteItemModal} color={'error'}>Delete</Button>
            </li>
            <li>
              <Button startIcon={<EditIcon />} onClick={() => editItemHandler(props.id)} color={'warning'}>Edit</Button>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          <ul className={classes.CustomItemListDisplayContainer}>
            <li>
              <span>id: </span>
              <span>{props.id}</span>
            </li>
            <li>
              <span>link: </span>
              <span>{props.link}</span>
            </li>
            <li>{soicalType}</li>
          </ul>
        </Grid>
      </Grid>
      <DeleteItemModal open={showDeleteItemoModal} handleClose={closeDeleteItemoModal} link={props.link} id={props.id}/>
    </>
  );
};
export default CustomItemList;
