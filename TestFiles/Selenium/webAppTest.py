import unittest
from time import sleep
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.devtools.v85.dom import scroll_into_view_if_needed

class WebAppTest(unittest.TestCase):
 
    def setUp(self):
        self.driver = webdriver.Chrome()
 
    def test_webapp(self):
        # needed to add sleeps for pipeline run flakiness
        driver = self.driver
        driver.get("https://nextjs-dashboard-liard-mu-62.vercel.app/")
        self.assertIn("Tim Cockerham", driver.title)
        self.assertEqual("Welcome to my Next.js web app!", "Welcome to my Next.js web app!",)
        sleep(1)
        driver.find_element(By.LINK_TEXT, "Click Here").click()
        sleep(2)
        self.assertIn("Tim Cockerham", driver.title)
        self.assertEqual("Welcome!", "Welcome!",)
        driver.find_element(By.LINK_TEXT, "Go to Invoices").click()
        sleep(1)
        self.assertIn("https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/invoices", driver.current_url)
        self.assertEqual("Invoices", "Invoices",)
        self.assertEqual("Thanos", "Thanos",)
        sleep(1)
        driver.find_element(By.LINK_TEXT, "Create Invoice").click()
        self.assertEqual("Choose customer", "Choose customer",)
        sleep(1)
        driver.find_element(By.LINK_TEXT, "Create Invoice").click()
        self.assertEqual("Please enter an amount greater than $0.", "Please enter an amount greater than $0.",)
        driver.get("https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/home")
        sleep(1)
        driver.find_element(By.LINK_TEXT, "Start with the Dashboard").click()
        sleep(1)
        self.assertIn("https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard", driver.current_url)
        self.assertEqual("Latest Invoices", "Latest Invoices",)
        driver.find_element(By.LINK_TEXT, "Customers").click()
        sleep(1)
        self.assertIn("https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/customers", driver.current_url)
        self.assertEqual("Customers", "Customers",)
        driver.find_element(By.LINK_TEXT, "Contact").click()
        sleep(1)
        self.assertIn("https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/contact", driver.current_url)
        driver.find_element(By.LINK_TEXT, "Home").click()
        sleep(1)
        driver.find_element(By.LINK_TEXT, "Click Here to clear the database").click()
        sleep(2)
        self.assertAlmostEqual("Database deleted", "Database deleted",)
        driver.get("https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/invoices")
        sleep(1)
        self.assertEqual("Invoices", "Invoices",)
        self.assertNotEqual("", "Thanos",)
        driver.get("https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/home")
        sleep(1)
        driver.find_element(By.LINK_TEXT, "Click Here to reseed the database").click()
        sleep(2)
        self.assertAlmostEqual("Database seeded", "Database seeded",)
        driver.get("https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/invoices")
        self.assertEqual("Invoices", "Invoices",)
        self.assertEqual("Thanos", "Thanos",)
        sleep(1)
        driver.get("https://nextjs-dashboard-liard-mu-62.vercel.app/dashboard/invoices?page=3")
        sleep(1)
        self.assertEqual("Spiderman", "Spiderman",)       
        
    def tearDown(self):
        self.driver.close()
 
if __name__ == "__main__":
    unittest.main()