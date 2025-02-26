import { useState } from "react"
import { Container, Content } from "./styles.js"
import imagePlaceholder from "../../assets/image-not-found-icon.svg"

import { Button } from "../Button"
import { Link } from "react-router-dom"
import { Pen } from "@phosphor-icons/react"

import { api } from "../../services/api"
import { useAuth } from "../../context/auth"
import { useCart } from "../../context/cart"

export function Card({ data, ...rest }) {
  const [quantity, setQuantity] = useState(1)
  const { user } = useAuth()
  const { handleAddDishToCart } = useCart()

  const imageURL = data.image
    ? `${api.defaults.baseURL}files/${data.image}`
    : imagePlaceholder

  return (
    <Container>
      <Content>
        <div className="container">
          <img src={imageURL} alt="Imagem do prato" />
          <Link to={`/details/${data.id}`}>
            <h3 className="product-title">
              {data.title}
              {" >"}
            </h3>
          </Link>
          <p className="description">{data.description}</p>
          <h1 className="price">R$ {data.price}</h1>

          {user.isAdmin ? (
            <Link to={`/edit/${data.id}`}>
              <Button title="editar prato" icon={Pen} variant="red" />
            </Link>
          ) : (
            <Button
              title="Incluir"
              onClick={() => handleAddDishToCart(data, quantity, imageURL)}
              variant="card"
            />
          )}
        </div>
      </Content>
    </Container>
  )
}
