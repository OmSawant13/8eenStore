module.exports = (req, res) => {
    res.json({
        status: 'OK',
        message: '8EEN STORE API is running',
        timestamp: new Date().toISOString()
    });
};
