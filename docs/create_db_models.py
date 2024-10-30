# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Float, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import datetime

Base = declarative_base()

class Visitor(Base):
    """
    description: Represents visitors to the theme park. 
    Stores visitor information such as name and visit timestamp.
    """
    __tablename__ = 'visitor'
    visitor_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    visit_time = Column(DateTime, default=datetime.datetime.utcnow)

class Attraction(Base):
    """
    description: Represents attractions within the theme park.
    Contains details like name, height requirement, and whether the attraction is operational.
    """
    __tablename__ = 'attraction'
    attraction_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    height_requirement_cm = Column(Float, nullable=True)
    is_operational = Column(Boolean, default=True)

class Ticket(Base):
    """
    description: Defines the tickets sold for entry to the park.
    Includes the ticket type and price.
    """
    __tablename__ = 'ticket'
    ticket_id = Column(Integer, primary_key=True, autoincrement=True)
    type = Column(String, nullable=False)
    price = Column(Float, nullable=False)

class Staff(Base):
    """
    description: Represents staff members employed at the park.
    Stores staff details including name, role, and employment date.
    """
    __tablename__ = 'staff'
    staff_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    role = Column(String, nullable=False)
    employment_date = Column(DateTime, default=datetime.datetime.utcnow)

class Maintenance(Base):
    """
    description: Records maintenance activities performed on attractions.
    Captures the date of maintenance, involved staff, and the relevant attraction.
    """
    __tablename__ = 'maintenance'
    maintenance_id = Column(Integer, primary_key=True, autoincrement=True)
    attraction_id = Column(Integer, ForeignKey('attraction.attraction_id'), nullable=False)
    staff_id = Column(Integer, ForeignKey('staff.staff_id'), nullable=False)
    maintenance_date = Column(DateTime, default=datetime.datetime.utcnow)

class Merchandise(Base):
    """
    description: Represents merchandise items sold at the park.
    Includes details like item name, price, and category.
    """
    __tablename__ = 'merchandise'
    merchandise_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    category = Column(String, nullable=False)

class Sale(Base):
    """
    description: Represents sales transactions for merchandise items.
    Includes the merchandise ID, quantity sold, and the sale timestamp.
    """
    __tablename__ = 'sale'
    sale_id = Column(Integer, primary_key=True, autoincrement=True)
    merchandise_id = Column(Integer, ForeignKey('merchandise.merchandise_id'), nullable=False)
    quantity = Column(Integer, nullable=False)
    sale_time = Column(DateTime, default=datetime.datetime.utcnow)

class Event(Base):
    """
    description: Defines special events hosted at the park.
    Stores event details such as name, date, and description.
    """
    __tablename__ = 'event'
    event_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    event_date = Column(DateTime, nullable=False)
    description = Column(String, nullable=True)

class Reservation(Base):
    """
    description: Represents reservations made by visitors for park events.
    Includes the visitor ID, event ID, and the reservation timestamp.
    """
    __tablename__ = 'reservation'
    reservation_id = Column(Integer, primary_key=True, autoincrement=True)
    visitor_id = Column(Integer, ForeignKey('visitor.visitor_id'), nullable=False)
    event_id = Column(Integer, ForeignKey('event.event_id'), nullable=False)
    reservation_time = Column(DateTime, default=datetime.datetime.utcnow)

class RideExperience(Base):
    """
    description: Captures visitor experiences on rides.
    Stores details like visitor ID, attraction ID, and rating provided by visitors.
    """
    __tablename__ = 'ride_experience'
    experience_id = Column(Integer, primary_key=True, autoincrement=True)
    visitor_id = Column(Integer, ForeignKey('visitor.visitor_id'), nullable=False)
    attraction_id = Column(Integer, ForeignKey('attraction.attraction_id'), nullable=False)
    rating = Column(Integer, nullable=True) # Rating out of 5

class FoodVendor(Base):
    """
    description: Represents food vendors available at the park.
    Stores vendor details including name, and specialty cuisine.
    """
    __tablename__ = 'food_vendor'
    vendor_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    specialty = Column(String, nullable=False)

class Purchase(Base):
    """
    description: Represents food purchase transactions.
    Contains details like the visitor ID, vendor ID, and purchase timestamp.
    """
    __tablename__ = 'purchase'
    purchase_id = Column(Integer, primary_key=True, autoincrement=True)
    visitor_id = Column(Integer, ForeignKey('visitor.visitor_id'), nullable=False)
    vendor_id = Column(Integer, ForeignKey('food_vendor.vendor_id'), nullable=False)
    purchase_time = Column(DateTime, default=datetime.datetime.utcnow)


# Create the SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Session for interacting with the database
Session = sessionmaker(bind=engine)
session = Session()

# Adding sample data
visitor1 = Visitor(name="Frodo Baggins")
visitor2 = Visitor(name="Samwise Gamgee")
visitor3 = Visitor(name="Aragorn")

attraction1 = Attraction(name="Mines of Moria Ride", height_requirement_cm=120.0, is_operational=True)
attraction2 = Attraction(name="Eye of Sauron Tower", height_requirement_cm=150.0, is_operational=True)

ticket1 = Ticket(type="Adult", price=40.0)
ticket2 = Ticket(type="Child", price=25.0)

staff1 = Staff(name="Gandalf", role="Guide")
staff2 = Staff(name="Legolas", role="Security")

maintenance1 = Maintenance(attraction_id=1, staff_id=1)
maintenance2 = Maintenance(attraction_id=2, staff_id=2)

merchandise1 = Merchandise(name="One Ring Replica", price=99.99, category="Jewelry")
merchandise2 = Merchandise(name="Gondorian Shield", price=59.99, category="Armor")

sale1 = Sale(merchandise_id=1, quantity=3)
sale2 = Sale(merchandise_id=2, quantity=1)

event1 = Event(name="Hobbit Day Celebration", event_date=datetime.datetime(2023, 10, 12))
event2 = Event(name="Rohan Festival", event_date=datetime.datetime(2023, 11, 5))

reservation1 = Reservation(visitor_id=1, event_id=1)
reservation2 = Reservation(visitor_id=2, event_id=2)

ride_experience1 = RideExperience(visitor_id=1, attraction_id=1, rating=5)
ride_experience2 = RideExperience(visitor_id=2, attraction_id=2, rating=4)

vendor1 = FoodVendor(name="Sam's Potatoes", specialty="Mashed Potatoes")
vendor2 = FoodVendor(name="Elrond's Elixirs", specialty="Elven Brew")

purchase1 = Purchase(visitor_id=1, vendor_id=1)
purchase2 = Purchase(visitor_id=2, vendor_id=2)

# Add instances to the session
session.add_all([visitor1, visitor2, visitor3, attraction1, attraction2, ticket1, ticket2, staff1, staff2, 
                 maintenance1, maintenance2, merchandise1, merchandise2, sale1, sale2, event1, event2, 
                 reservation1, reservation2, ride_experience1, ride_experience2, vendor1, vendor2, 
                 purchase1, purchase2])

# Commit the session to save to the database
session.commit()

# Close the session
session.close()
