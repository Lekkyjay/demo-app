import { Router } from 'express'
import { getCategories } from '../controllers/categories'

const router = Router()

router.get('/categories', getCategories)

export default router