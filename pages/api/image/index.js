import { image } from '../../../dataImages'

export default function handler(req, res) {
  res.status(200).json(image)
}
