﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20220920173003_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("Domain.Match", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<int>("AwayGoals")
                        .HasColumnType("INTEGER");

                    b.Property<string>("AwayTeam")
                        .HasColumnType("TEXT");

                    b.Property<int>("HomeGoals")
                        .HasColumnType("INTEGER");

                    b.Property<string>("HomeTeam")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("MatchDate")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Matches");
                });
#pragma warning restore 612, 618
        }
    }
}
