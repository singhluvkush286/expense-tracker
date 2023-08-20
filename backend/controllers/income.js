const IncomeSchema = require("../models/IncomeModel")


exports.addIncome = async (req,res) => {
    const {tittle,amount,category,description,date} = req.body

    const income = IncomeSchema({
        tittle,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if(!tittle || !amount || !category || !description || !date){
            return res.status(400).json({msg : "Please fill all the fields"})
        }
        if(amount <= 0 || !amount==='number'){
            return res.status(400).json({msg : "Amount must be positive number"})
        }
        await income.save()
        res.status(200).json({msg: 'Income Added'})
    } catch (error) {
        res.status(400).json({msg : "Error"})
    }

    console.log(income)
}