import * as React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "@material-ui/core";

const styles = {
  root: {
    color: "white",
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
};
type MenuBarProps = { classes?: any };

type MenuBarState = {
  anchorEl: any;
};

class MenuBar extends React.Component<MenuBarProps, MenuBarState> {
  constructor(props: MenuBarProps) {
    super(props);
    this.state = { anchorEl: null };
  }
  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={this.state.anchorEl}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>
            <Link className={classes.link} href="/coffee">
              Coffees
            </Link>
          </MenuItem>
          <MenuItem onClick={this.handleClose}>My account</MenuItem>
          <MenuItem onClick={this.handleClose}>
            <Link className={classes.link} href="/logout">
              Logout
            </Link>
          </MenuItem>
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MenuBar);
