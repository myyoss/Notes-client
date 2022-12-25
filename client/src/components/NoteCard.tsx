import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteForever, DeleteForeverOutlined, DeleteForeverRounded, DeleteForeverSharp, DeleteForeverTwoTone } from '@mui/icons-material';
import { blue, green, red, yellow } from '@material-ui/core/colors';

const newStyles = makeStyles({
    cardBorder: {
        border: (note: any) => {
            if (note.category == 'work') {
                return '1px solid pink'
            }
            if (note.category == 'todos') {
                return '1px solid lightgreen'
            }
            if (note.category == 'reminders') {
                return '1px solid lightyellow'
            }
            if (note.category == 'money') {
                return '1px solid lightblue'
            }
        }
    },
    categoryAvatar: {
        backgroundColor: (note: any) => {
            if (note.category === 'todos') {
                return green[500]
            }
            if (note.category === 'reminders') {
                return yellow[900]
            }
            if (note.category === 'work') {
                return red[300]
            }
            return blue[500]
        }
    },
    delete:{
        color:'#9c27b0'
    }
})

const NoteCard = ({ note, handleDelete }: any) => {
    const classes: any = newStyles(note)
    return (
        <div>
            <Card elevation={3} className={classes.cardBorder}>
                <CardHeader
                    avatar={
                        <Avatar className={classes.categoryAvatar}>
                            {note.category[0].toUpperCase()}
                        </Avatar>
                    }
                    action={
                        <IconButton onClick={() => handleDelete(note._id)}>
                            <DeleteForeverOutlined className={classes.delete}/>
                        </IconButton>
                    }
                    title={note.title}
                    subheader={note.category}
                />
                <CardContent>
                    <Typography variant='body2' color='textSecondary'>
                        {note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default NoteCard