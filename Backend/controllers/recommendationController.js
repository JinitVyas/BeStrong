exports.handleRecommendation = (req, res) => {
    const data = req.body;
    console.log("Received data: ", data);
    
    // Your logic here to process the data
    
    res.json({ message: 'Data received and processed successfully!' });
};
