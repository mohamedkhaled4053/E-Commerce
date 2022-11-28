import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { Contact } from "../components"


test('should have header with specific text', () => { 
    render(<Contact/>)
    let header = screen.getByRole('heading',{name:/Join our newsletter and get 20% off/i})
    expect(header).toBeInTheDocument()
 })

test('should have input', () => { 
    render(<Contact/>)
    let header = screen.getByPlaceholderText(/enter email/i)
    expect(header).toBeInTheDocument()
 })