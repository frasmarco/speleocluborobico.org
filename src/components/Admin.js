import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import SettingsIcon from '@material-ui/icons/Settings';
import React from 'react';

export default function Admin() {
    return (
        <Tooltip title="Content editing admin interface" arrow>
            <IconButton aria-label="admin" href="/admin/">
                <SettingsIcon />
            </IconButton>
        </Tooltip>
    );
}