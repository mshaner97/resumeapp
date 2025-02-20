import React, { useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Dropdown = ({ buttonText, menuItems }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}sx={{
                    backgroundColor: 'pink',
                    '&:hover': {
                        backgroundColor: '#ff69b4',
                    },
                    fontSize: '2rem',
                    padding: '12px 24px',
                    color: "white",
                }}
            >
                {buttonText}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    
                }}
            >
                {menuItems.map((item, index) => (
                    <MenuItem key={index} onClick={handleClose} sx={{
                        backgroundColor: 'white',
                        '&:hover': {
                            color: 'hotpink',
                        },
                        fontSize: '2rem',
                        padding: '12px 24px',
                    }}>{item}
                        
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default Dropdown;
