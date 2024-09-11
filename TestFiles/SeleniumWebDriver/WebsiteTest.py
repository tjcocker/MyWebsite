import unittest
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

class WebsiteTest(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome()

    def test_website(self):

        driver = self.driver
        driver.get("https://tim-cockerham.com")
        self.assertIn("Tim Cockerham", driver.title)
        self.assertIn("https://tim-cockerham.com/", driver.current_url)
                         
    def tearDown(self):
        self.driver.close()

if __name__ == "__main__":
    unittest.main()