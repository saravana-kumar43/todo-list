import { Router } from "express";

const router = Router();

// controllers

import {getList , addListItem , updateListItem ,deleteListItem} from '../controllers/todo.controller.js'

router.get( '/get-list' , getList ) ;
router.post( '/add-list' , addListItem ) ;
router.put( '/update-list/:_id' , updateListItem ) ;
router.delete( '/delete-list/:_id' , deleteListItem ) ;

export default router ;