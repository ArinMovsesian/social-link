import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddItem from "./AddItem";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary {...props} />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Collapse = () => {
  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [editMode, setEditMode] = React.useState<boolean>(false);

  const openCollapseHandler = () => {
    setExpanded(true);
  };
  const closeCollapseHandler = () => {
    setExpanded(false);
  };
  const changeTitleHandler = (flag: boolean) => {
    setEditMode(flag);
  }
  let collaspeTitle = 'افزودن مسیر ارتباطی';
  if(editMode) {
    collaspeTitle = 'ویرایش مسیر ارتباطی';
  }
  return (
    <div>
      <Accordion expanded={expanded}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Button startIcon={<AddIcon />} onClick={openCollapseHandler}>
            {
             collaspeTitle
            }
          </Button>
        </AccordionSummary>
        <AccordionDetails>
          <AddItem onCloseCollapse={closeCollapseHandler} onOpenCollapse={openCollapseHandler} changeTitle={changeTitleHandler}/>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default Collapse;
