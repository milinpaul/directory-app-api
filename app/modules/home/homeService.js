const HomeService = (req, res) => {
  res.status(200).json({
    message: 'Welcome To Directroy App'
  })
}

module.exports = HomeService
