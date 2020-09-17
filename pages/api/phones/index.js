import { phones } from '../../../phones'

export default function handler(req, res) {
  res.status(200).json(phones)
}
