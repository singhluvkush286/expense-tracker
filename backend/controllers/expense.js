const ExpenseSchema = require("../models/ExpenseModel")


exports.addExpense = async (req,res) => {
    const {tittle,amount,category,description,date} = req.body

    const expense = ExpenseSchema({
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
        await expense.save()
        res.status(200).json({msg: 'Expense Added'})
    } catch (error) {
        res.status(500).json({msg : "Server Error"})
    }

    console.log(expense)
}


exports.getExpense = async (req,res) => {
    try {
        const expense = await ExpenseSchema.find().sort({createdAt : -1})
        res.status(200).json(expense)
    } catch (error) {
        res.status(500).json({msg : 'server error'})
    }
}  


exports.deleteExpense = async (req,res) => {
    const {id} = req.params ;
    ExpenseSchema.findByIdAndDelete(id)
         .then(expense => {
            res.status(200).json({msg : 'Expense Deleted'})
         })
         .catch((error) => {
                res.status(500).json({msg : 'Server Error'})
         })
}