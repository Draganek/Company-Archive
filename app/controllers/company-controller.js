const Company = require('../db/models/company')

class CompanyController {

  async showCompanies(req, res) {
    const companies = await Company.find({});

    console.log(companies)
    res.render('pages/companies', {
      companies,
      url: req.url
    });
  }

  showCompany(req, res) {
    console.log(req.url);
    const { name } = req.params;
    const companies = [
      { slug: 'tworcastron', name: 'Tworca Stron.pl' },
      { slug: 'brukmode', name: 'Bruk Mode' },
    ];
  
    const company = companies.find(x => x.slug === name);
  
    res.render('pages/company', { 
      name: company?.name,
      companies,
      title: company?.name ?? 'Brak wyników',
      url: req.url
    });
  }
  
}

module.exports = new CompanyController();